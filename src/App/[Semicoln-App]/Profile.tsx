import { useState } from "react";
import { Link } from "react-router-dom";
import { tasks } from "../../Features/SemiColnApp/data";
import {
  getStatusColor,
  getStatusLabel,
} from "../../Features/SemiColnApp/services/services";
import type { TaskStatus } from "../../Features/SemiColnApp/type";

type FilterOption = "all" | TaskStatus;

const filterOptions: { label: string; value: FilterOption }[] = [
  { label: "All Tasks", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
];

const Profile = () => {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: "Ahmed Gouda",
    email: "ahmed@semicoln.com",
    initials: "AG",
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  const activeLabel =
    filterOptions.find((o) => o.value === filter)?.label ?? "Filter Items";

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 mb-8 h-44 flex items-end">
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-indigo-500 opacity-80" />
        <div className="absolute bottom-0 right-24 w-28 h-28 rounded-full bg-yellow-400 opacity-80 translate-y-1/2" />

        <div className="relative z-10 flex items-center gap-4 p-6">
          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0">
            <span className="text-gray-900 font-bold text-lg">
              {user.initials}
            </span>
          </div>

          <div>
            <h1 className="text-white font-semibold text-xl leading-tight">
              {user.name}
            </h1>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="border-b border-gray-200 mb-6">
          <span className="inline-block pb-2 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600">
            Tasks
          </span>
        </div>

        {/* Filter Dropdown */}
        <div className="relative inline-block mb-6">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-600 hover:bg-gray-50 transition-colors min-w-[160px] justify-between"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
              {activeLabel}
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-10 overflow-hidden">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setFilter(opt.value);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    filter === opt.value
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Task Cards Grid */}
        {filteredTasks.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-16">
            No tasks found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-400">
                    {task.id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {getStatusLabel(task.status)}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-4 leading-relaxed line-clamp-2">
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
        )}
      </div>
    </div>
  );
};

export default Profile;