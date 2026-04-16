import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "../../Features/SemiColnApp/style.css";
import { useUserStore } from "@/store/UserStore";
import { useWorkSpaceStore } from "@/store/WorkSpaceStore";
import { HandleGetAllTasks } from "@/Features/SemiColnApp/services/services";
import type { Task } from "@/Features/SemiColnApp/type";

export default function Semicoln() {
  const UserName = useUserStore((s) => s.userName);
  const workspaceName = useWorkSpaceStore((s) => s.workspaceName);
  const workspaceDescription = useWorkSpaceStore((s) => s.description);
  const workspaceId = useWorkSpaceStore((s) => s._id);
  const [apiTasks, setApiTasks] = useState<Task[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [taskError, setTaskError] = useState<string | null>(null);

  const fetchTasks = async () => {
    if (!workspaceId) {
      setApiTasks([]);
      return;
    }

    try {
      setLoadingTasks(true);
      setTaskError(null);
      const data = await HandleGetAllTasks();
      setApiTasks(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load tasks.";
      setTaskError(
        message.includes("401")
          ? "Session expired. Please log in again."
          : "Failed to load tasks. Please try again.",
      );
      console.error(err);
    } finally {
      setLoadingTasks(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [workspaceId]);

  const { totalTasks, pendingTasks, inProgressTasks, completedTasks } =
    useMemo(() => {
      return {
        totalTasks: apiTasks.length,
        pendingTasks: apiTasks.filter((task) => task.status === "pending")
          .length,
        inProgressTasks: apiTasks.filter(
          (task) => task.status === "in-progress",
        ).length,
        completedTasks: apiTasks.filter(
          (task) => task.status === "completed",
        ).length,
      };
    }, [apiTasks]);

  return (
    <div className="min-h-full">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <span className="text-4xl">👋</span>
            Hi {UserName ?? "user"},
          </h1>
          <p className="text-gray-600">Welcome to Semicolon Task Management</p>
          {workspaceName ? (
            <p className="text-gray-500 text-sm mt-2">
              Workspace: <span className="font-medium">{workspaceName}</span>
            </p>
          ) : (
            <p className="text-gray-500 text-sm mt-2">
              Select or create a workspace to get started.
            </p>
          )}
        </div>

        <Card className="card mb-8 bg-linear-to-r from-gray-900 to-blue-900 text-white overflow-hidden relative">
          <Button
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">
                  Motivation to help
                  <br />
                  you work.
                </h2>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Workspace Overview
              </h3>
              <p className="text-xl font-semibold text-gray-900">
                {workspaceName ?? "No workspace selected"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {workspaceDescription ??
                  "Choose a workspace to see its details and task summary."}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-4">
                Task Summary
              </h3>
              {taskError ? (
                <p className="text-sm text-red-600">{taskError}</p>
              ) : loadingTasks ? (
                <p className="text-sm text-gray-500">Loading tasks...</p>
              ) : !workspaceId ? (
                <p className="text-sm text-gray-500">
                  Select a workspace to see task statistics.
                </p>
              ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Total Tasks</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {totalTasks}
                  </p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-3">
                  <p className="text-xs text-yellow-700">Pending</p>
                  <p className="text-lg font-semibold text-yellow-900">
                    {pendingTasks}
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-xs text-blue-700">In Progress</p>
                  <p className="text-lg font-semibold text-blue-900">
                    {inProgressTasks}
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-3">
                  <p className="text-xs text-green-700">Completed</p>
                  <p className="text-lg font-semibold text-green-900">
                    {completedTasks}
                  </p>
                </div>
              </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Let's get you started</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Profile
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {UserName ?? "User"}, make your profile stand out
                    </h3>
                    <p className="text-sm text-white/80">
                      Add a photo and quick bio so teammates recognize you
                      faster.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">
                    👤
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button
                    asChild
                    className="bg-white text-slate-900 hover:bg-white/90"
                  >
                    <Link to="/Semicoln/profile">Update Profile</Link>
                  </Button>
                  <span className="text-xs text-white/70">
                    Takes less than 2 minutes
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-linear-to-br from-amber-50 via-orange-50 to-rose-100">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                      First Task
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-slate-900">
                      Turn your plan into your first task
                    </h3>
                    <p className="text-sm text-slate-600">
                      Create a task, set a due date, and keep momentum in your
                      workspace.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm">
                    📋
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button
                    asChild
                    className="bg-slate-900 text-white hover:bg-slate-800"
                  >
                    <Link to="/Semicoln/tasks">Create Task</Link>
                  </Button>
                  <span className="text-xs text-slate-500">
                    Stay aligned with your workspace
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


