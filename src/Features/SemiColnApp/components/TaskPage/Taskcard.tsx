import React, { useEffect, useState } from "react";
import type { TabType, Task } from "../../type";
import {
  getStatusColor,
  getStatusLabel,
  HandleGetAllTasks,
} from "../../services/services";
import TaskAddModel from "./TaskAddModel";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const TasksLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [apiTasks, setApiTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await HandleGetAllTasks();
        setApiTasks(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load tasks.";
        setError(
          message.includes("401")
            ? "Session expired. Please log in again."
            : "Failed to load tasks. Please try again.",
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks =
    activeTab === "all"
      ? apiTasks
      : apiTasks.filter((task) => task.status === activeTab);

  const getCount = (tab: TabType) =>
    tab === "all"
      ? apiTasks.length
      : apiTasks.filter((t) => t.status === tab).length;

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 rounded-lg">
      <div className="shrink-0 bg-white/90 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <div className="px-3 py-6">
          <div className="mb-5">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Tasks
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Your tasks in your space.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="md:flex gap-2 hidden">
              {(
                ["all", "pending", "in-progress", "completed"] as TabType[]
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab === "all"
                    ? "All Tasks"
                    : tab === "in-progress"
                      ? "In Progress"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      activeTab === tab
                        ? "bg-indigo-200 text-indigo-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {getCount(tab)}
                  </span>
                </button>
              ))}
            </div>

            <div>
              <TaskAddModel typeofAction="create" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 md:px-6 py-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 text-indigo-500 animate-spin" />
            <p className="mt-4 text-gray-500 text-sm">Loading tasks…</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-indigo-600 hover:underline text-sm font-medium"
            >
              Retry
            </button>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-500 text-sm">No tasks found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTasks.map((task, index) => (
              <div
                key={task.id ?? index}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-400">
                    {task.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                  >
                    {getStatusLabel(task.status)}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 leading-relaxed">
                  {task.taskDescription}
                </h3>

                <Link
                  to={`/Semicoln/tasks/${task.id}`}
                  className="inline-flex items-center gap-1.5 text-indigo-600 text-sm font-medium hover:gap-2.5 transition-all"
                >
                  View Task
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksLayout;
