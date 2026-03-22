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

export const getTaskCount = (type: TabType): number => {
  if (type === "all") return tasks.length;
  return tasks.filter((task) => task.status === type).length;
};

export const handelDeleteTask = async (taskId: string): Promise<void> => {
  const token = useUserStore.getState().token;

  const response = await fetch(`${Second_URL}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  toast.success("Task deleted successfully");
};

export const Logout = () => {
  useUserStore.getState().clearUser();
  window.location.reload();
};

export const HandleCreateWokSpace = async (data: Workspace) => {
  const token = useUserStore.getState().token;
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

export const HandleGetAllWorkSpaces = async (): Promise<
  WorkspaceResponse[]
> => {
  const token = useUserStore.getState().token;

  const response = await fetch(`${Second_URL}/workspaces`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workspaces: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  return Array.isArray(data.workspaces)
    ? data.workspaces
    : Array.isArray(data)
      ? data
      : [];
};

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

export const HandleGetAllTasks = async (): Promise<Task[]> => {
  const token = useUserStore.getState().token;

  const response = await fetch(`${Second_URL}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch tasks: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  return Array.isArray(data.tasks)
    ? data.tasks
    : Array.isArray(data)
      ? data
      : [];
};

export const HandleCreateTask = async (data: Task): Promise<Task> => {
  const token = useUserStore.getState().token;
  const workspaceId = useWorkSpaceStore.getState()._id;

  const response = await fetch(`${Second_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      status: data.status,
      startDate: data.startDate,
      endDate: data.endDate,
      workspace: workspaceId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  const { task } = await response.json();
  console.log(task);
  return task;
};

export const HandleEditTask = async (data: Task): Promise<Task> => {
  const token = useUserStore.getState().token;

  if (!data.id) {
    throw new Error("Task ID is required for editing");
  }

  const response = await fetch(`${Second_URL}/tasks/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      status: data.status,
      startDate: data.startDate,
      endDate: data.endDate,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  const { task } = await response.json();
  console.log(task);
  return task;
};
