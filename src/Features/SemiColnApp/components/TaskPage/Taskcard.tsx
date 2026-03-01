import React, { useState } from "react";
import type { TabType } from "../../type";
import { tasks } from "../../data";
import {
  getStatusColor,
  getStatusLabel,
  getTaskCount,
} from "../../services/services";
import TaskAddModel from "./TaskAddModel";
import { Link } from "react-router-dom";

const TasksLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredTasks =
    activeTab === "all"
      ? tasks
      : tasks.filter((task) => task.status === activeTab);

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
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === "all"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Tasks
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "all"
                      ? "bg-indigo-200 text-indigo-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {getTaskCount("all")}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("pending")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === "pending"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Pending
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "pending"
                      ? "bg-indigo-200 text-indigo-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {getTaskCount("pending")}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("in-progress")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === "in-progress"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                In Progress
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "in-progress"
                      ? "bg-indigo-200 text-indigo-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {getTaskCount("in-progress")}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === "completed"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Completed
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === "completed"
                      ? "bg-indigo-200 text-indigo-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {getTaskCount("completed")}
                </span>
              </button>
            </div>

            <div>
              <TaskAddModel typeofAction="create" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 md:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400">
                  {task.id}
                </span>
                <span
                  className={`px-3  py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
                >
                  {getStatusLabel(task.status)}
                </span>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-4 leading-relaxed">
                {task.title}
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
      </div>
    </div>
  );
};

export default TasksLayout;
