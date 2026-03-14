import { tasks } from "../data";
import type { TabType, TaskStatus } from "../type";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/UserStore";
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

export const handelDeleteTask = () => {
  toast.success("Task deleted successfully");
};



export const Logout = () => {
  useUserStore.getState().clearUser();
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.reload();
};