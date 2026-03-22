import { ArrowLeft } from "lucide-react";
import { tasks } from "../../data";
import { getStatusColor, getStatusLabel } from "../../services/services";
import type { Task } from "../../type";
import { useNavigate } from "react-router-dom";
import TaskAddModel from "./TaskAddModel";

const TaskDetailUi = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const task: Task | undefined = tasks.find((task) => task.id === id);

  return (
    <div className="  p-6 ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white  border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-blue-600" />
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-800">Tasks</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">{task?.taskName}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 flex-1 pr-4">
              {task?.taskName}
            </h1>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-gray-500">Date Created</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  {task?.startDate}
                </span>
                <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span
              className={`inline-block px-3 py-1 rounded text-sm font-medium ${getStatusColor(task?.status ?? "pending")}`}
            >
              {getStatusLabel(task?.status ?? "pending")}
            </span>
          </div>

          <div className="flex items-center justify-end gap-2 mb-8">
            <span className="text-xs text-gray-500">Date Due</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                {task?.endDate}
              </span>
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Work on it Now
            </button>
            <div>
              <TaskAddModel typeofAction="Delete" />
            </div>

            <div>
              <TaskAddModel typeofAction="edit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailUi;
