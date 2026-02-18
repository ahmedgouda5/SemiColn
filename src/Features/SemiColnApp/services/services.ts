import { tasks } from "../data";
import type { TabType, TaskStatus } from "../type";

export const getStatusColor = (status: TaskStatus): string => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "in-progress":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
  }
};

export const getStatusLabel = (status: TaskStatus): string => {
  switch (status) {
    case "pending":
      return "Pending";
    case "in-progress":
      return "In Progress";
    case "completed":
      return "Completed";
  }
};

export const getTaskCount = (type: TabType): number => {
  if (type === "all") return tasks.length;
  return tasks.filter((task) => task.status === type).length;
};
