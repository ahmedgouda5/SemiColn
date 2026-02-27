export type UploadState = "empty" | "preview" | "saved";
import { Home, CheckSquare, Settings } from "lucide-react";

export const navItems = [
  { icon: Home, label: "overview", path: "/Semicoln/app" },
  { icon: CheckSquare, label: "tasks", path: "/Semicoln/tasks" },
  { icon: Settings, label: "settings", path: "/Semicoln/settings" },
];

export const calendarDays = [
  { day: "Sun", dates: [1, 8, 15, 22, 29] },
  { day: "Mon", dates: [2, 9, 16, 23, 30] },
  { day: "Tue", dates: [3, 10, 17, 24, 31] },
  { day: "Wed", dates: [4, 11, 18, 25, 1] },
  { day: "Thu", dates: [5, 12, 19, 26, 2] },
  { day: "Fri", dates: [6, 13, 20, 27, 3] },
  { day: "Sat", dates: [7, 14, 21, 28, 4] },
];

export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  startDate: string;
  endDate: string;
}

export type TabType = "all" | TaskStatus;
