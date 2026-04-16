import { tasks } from "../data";
import type {
  TabType,
  Task,
  TaskStatus,
  Workspace,
  WorkspaceResponse,
} from "../type";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/UserStore";
import { Second_URL } from "@/shared/services";
import { useWorkSpaceStore } from "@/store/WorkSpaceStore";

const TASK_CACHE_TTL = 30_000;
const taskCache = new Map<string, { tasks: Task[]; fetchedAt: number }>();

const updateTaskCache = (workspaceId: string, tasks: Task[]) => {
  taskCache.set(workspaceId, { tasks, fetchedAt: Date.now() });
  useWorkSpaceStore.getState().setTasks(tasks);
};

// Converts backend task objects into the frontend task shape used across the app.
const normalizeTask = (
  task: Partial<Task> & {
    _id?: string;
    id?: string;
    title?: string;
    description?: string;
    dueDate?: string;
    workspace?: string;
  },
): Task => ({
  id: task.id ?? task._id ?? "",
  _id: task._id ?? task.id ?? "",
  workspace: task.workspace ?? "",
  taskName: task.taskName ?? task.title ?? "",
  taskDescription: task.taskDescription ?? task.description ?? "",
  status: (task.status as TaskStatus | undefined) ?? "pending",
  startDate: task.startDate ?? "",
  endDate: task.endDate ?? task.dueDate ?? "",
});

// Returns the current auth token and stops the request flow when the user is not logged in.
const getAuthTokenOrThrow = () => {
  const token = useUserStore.getState().token;

  if (!token) {
    throw new Error("Please log in again.");
  }

  return token;
};

// Clears persisted auth and workspace state after the API reports an unauthorized session.
const handleUnauthorized = () => {
  useUserStore.getState().clearUser();
  useWorkSpaceStore.getState().clearWorkspace();
  taskCache.clear();
};

// Builds a user-facing error message from an API response and handles session expiry.
const getErrorMessage = async (
  response: Response,
  fallbackMessage: string,
): Promise<string> => {
  if (response.status === 401) {
    handleUnauthorized();
    return "Session expired. Please log in again.";
  }

  try {
    const result = await response.json();
    return result?.message || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
};

// Maps each task status to the badge colors used in the UI.
export const getStatusColor = (status: TaskStatus | undefined): string => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "in-progress":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    default:
      return "";
  }
};

// Converts raw task status values into readable labels for display.
export const getStatusLabel = (status: TaskStatus | undefined): string => {
  switch (status) {
    case "pending":
      return "Pending";
    case "in-progress":
      return "In Progress";
    case "completed":
      return "Completed";
    default:
      return "Unknown";
  }
};

// Counts mock tasks by tab type for legacy task summary usage.
export const getTaskCount = (type: TabType): number => {
  if (type === "all") return tasks.length;
  return tasks.filter((task) => task.status === type).length;
};

// Deletes a task by id and shows a success toast when the request completes.
export const handelDeleteTask = async (taskId: string): Promise<void> => {
  const token = getAuthTokenOrThrow();
  const workspaceId = useWorkSpaceStore.getState()._id;

  const response = await fetch(`${Second_URL}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Failed to delete task"));
  }

  if (workspaceId) {
    const cached = taskCache.get(workspaceId);
    if (cached) {
      const updated = cached.tasks.filter((task) => task.id !== taskId);
      updateTaskCache(workspaceId, updated);
    }
  }

  toast.success("Task deleted successfully");
};

// Logs the current user out and forces the app to reload into the unauthenticated state.
export const Logout = () => {
  useUserStore.getState().clearUser();
  window.location.reload();
};

// Creates a new workspace in the backend and stores it as the active workspace locally.
export const HandleCreateWokSpace = async (data: Workspace) => {
  const token = getAuthTokenOrThrow();
  const Userid = useUserStore.getState().id;

  const response = await fetch(`${Second_URL}/workspaces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      workspaceName: data.workspaceName,
      description: data.workspaceDescription,
      user: Userid,
    }),
  });

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(response, "Failed to create workspace"),
    );
  }

  const { workspace } = await response.json();

  useWorkSpaceStore
    .getState()
    .setWorkspace(
      workspace.description,
      workspace.workspaceName,
      null,
      workspace._id,
      workspace.tasks ?? [],
    );

  console.log(workspace);
  return workspace;
};

// Fetches all workspaces that belong to the authenticated user.
export const HandleGetAllWorkSpaces = async (): Promise<
  WorkspaceResponse[]
> => {
  const token = getAuthTokenOrThrow();

  const response = await fetch(`${Second_URL}/workspaces`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        `Failed to fetch workspaces: ${response.status} ${response.statusText}`,
      ),
    );
  }

  const data = await response.json();
  return Array.isArray(data.workspaces)
    ? data.workspaces
    : Array.isArray(data)
      ? data
      : [];
};

// Saves the selected workspace into the Zustand store for later task operations.
export const HandleSelectWorkspace = (workspace: WorkspaceResponse) => {
  useWorkSpaceStore
    .getState()
    .setWorkspace(
      workspace.description,
      workspace.workspaceName,
      null,
      workspace._id,
      workspace.tasks ?? [],
    );
};

// Fetches tasks from the API, normalizes them, and returns only tasks from the active workspace.
export const HandleGetAllTasks = async (): Promise<Task[]> => {
  const token = getAuthTokenOrThrow();
  const workspaceId = useWorkSpaceStore.getState()._id;

  if (!workspaceId) {
    return [];
  }

  const cached = taskCache.get(workspaceId);
  if (cached && Date.now() - cached.fetchedAt < TASK_CACHE_TTL) {
    return cached.tasks;
  }

  const response = await fetch(`${Second_URL}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(
        response,
        `Failed to fetch tasks: ${response.status} ${response.statusText}`,
      ),
    );
  }

  const data = await response.json();
  const tasks = Array.isArray(data.tasks)
    ? data.tasks
    : Array.isArray(data)
      ? data
      : [];

  const normalizedTasks: Task[] = tasks.map(normalizeTask);

  const filtered = normalizedTasks.filter(
    (task: Task) => task.workspace === workspaceId,
  );

  updateTaskCache(workspaceId, filtered);
  return filtered;
};

// Creates a new task inside the currently selected workspace.
export const HandleCreateTask = async (data: Task): Promise<Task> => {
  const token = getAuthTokenOrThrow();
  const workspaceId = useWorkSpaceStore.getState()._id;

  console.log(data, workspaceId, token);
  if (!workspaceId) {
    throw new Error("Please select a workspace before creating a task");
  }

  const response = await fetch(`${Second_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: data.taskName,
      description: data.taskDescription,
      status: data.status,
      startDate: data.startDate,
      dueDate: data.endDate,
      workspace: workspaceId,
    }),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Failed to create task"));
  }

  const { task } = await response.json();
  console.log(task);
  const normalized = normalizeTask(task);

  if (workspaceId) {
    const cached = taskCache.get(workspaceId);
    if (cached) {
      updateTaskCache(workspaceId, [normalized, ...cached.tasks]);
    }
  }

  return normalized;
};

// Updates an existing task and returns the normalized task payload from the API.
export const HandleEditTask = async (data: Task): Promise<Task> => {
  const token = getAuthTokenOrThrow();
  const taskId = data.id ?? data._id;
  const workspaceId = useWorkSpaceStore.getState()._id;

  if (!taskId) {
    throw new Error("Task ID is required for editing");
  }

  const response = await fetch(`${Second_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: data.taskName,
      description: data.taskDescription,
      status: data.status,
      startDate: data.startDate,
      dueDate: data.endDate,
    }),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Failed to update task"));
  }

  const { task } = await response.json();
  const normalized = normalizeTask(task);

  if (workspaceId) {
    const cached = taskCache.get(workspaceId);
    if (cached) {
      const updated = cached.tasks.map((item) =>
        item.id === normalized.id ? normalized : item,
      );
      updateTaskCache(workspaceId, updated);
    }
  }

  return normalized;
};
