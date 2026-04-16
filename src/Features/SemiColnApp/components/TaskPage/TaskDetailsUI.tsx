import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  getStatusColor,
  getStatusLabel,
  HandleGetAllTasks,
} from "../../services/services";
import type { Task } from "../../type";
import TaskAddModel from "./TaskAddModel";

const TaskDetailUi = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const [task, setTask] = useState<Task | undefined>();
  const [loading, setLoading] = useState(true);

  const loadTask = async () => {
    try {
      const tasks = await HandleGetAllTasks();
      setTask(tasks.find((item) => (item.id ?? item._id) === id));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadTask();
  }, [id]);

  if (loading) {
    return <div className="p-6">Loading task...</div>;
  }

  if (!task) {
    return <div className="p-6">Task not found.</div>;
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-blue-600" />
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-800">Tasks</span>
            <span className="text-gray-400">{">"}</span>
            <span className="text-gray-600">{task.taskName}</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
          <div className="mb-6 flex items-start justify-between">
            <h1 className="flex-1 pr-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {task.taskName}
            </h1>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs text-gray-500">Date Created</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  {task.startDate}
                </span>
                <div className="h-4 w-4 rounded-full border-2 border-blue-600"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span
              className={`inline-block rounded px-3 py-1 text-sm font-medium ${getStatusColor(task.status)}`}
            >
              {getStatusLabel(task.status)}
            </span>
          </div>

          <div className="mb-6 flex items-center justify-end gap-2">
            <span className="text-xs text-gray-500">Date Due</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                {task.endDate}
              </span>
              <div className="h-4 w-4 rounded-full bg-blue-600"></div>
            </div>
          </div>

          <p className="mb-8 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {task.taskDescription || "No description provided."}
          </p>

          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
              Work on it Now
            </button>
            <div>
              <TaskAddModel
                typeofAction="Delete"
                task={task}
                onTaskAdd={() => navigate("/Semicoln/tasks")}
              />
            </div>

            <div>
              <TaskAddModel typeofAction="edit" task={task} onTaskAdd={loadTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailUi;
