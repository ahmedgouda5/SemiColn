import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "@/Features/SemiColnApp/type";

interface WorkSpaceState {
  description: string | null;
  workspaceName: string | null;
  id: string | null;
  _id: string | null;
  tasks: Task[];
  setWorkspace: (
    description: string | null,
    workspaceName: string | null,
    id: string | null,
    _id: string | null,
    tasks?: Task[]
  ) => void;
  setTasks: (tasks: Task[]) => void;
  clearWorkspace: () => void;
}

const initialState = {
  description: null as string | null,
  workspaceName: null as string | null,
  id: null as string | null,
  _id: null as string | null,
  tasks: [] as Task[],
};

export const useWorkSpaceStore = create<WorkSpaceState>()(
  persist(
    (set) => ({
      ...initialState,
      setWorkspace: (description, workspaceName, id, _id, tasks = []) =>
        set({ description, workspaceName, id, _id, tasks }),
      setTasks: (tasks) => set({ tasks }),
      clearWorkspace: () => set(initialState),
    }),
    {
      name: "semicoln-workspace",
      partialize: (state) => ({
        description: state.description,
        workspaceName: state.workspaceName,
        _id: state._id,
        tasks: state.tasks,
      }),
    }
  )
);
