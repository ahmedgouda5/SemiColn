import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { WorkspaceResponse } from "@/Features/SemiColnApp/type";
import {
  HandleGetAllWorkSpaces,
  HandleSelectWorkspace,
} from "@/Features/SemiColnApp/services/services";
import { Plus, Briefcase, ArrowRight, Loader2 } from "lucide-react";

interface WorkspaceListProps {
  onCreateNew: () => void;
}

const WorkspaceList = ({ onCreateNew }: WorkspaceListProps) => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState<WorkspaceResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        setLoading(true);
        const data = await HandleGetAllWorkSpaces();
        setWorkspaces(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load workspaces.";
        setError(
          message.includes("401")
            ? "Session expired. Please log in again."
            : "Failed to load workspaces. Please try again.",
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkspaces();
  }, []);

  const handleSelect = (workspace: WorkspaceResponse) => {
    HandleSelectWorkspace(workspace);
    navigate("/Semicoln/app");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="h-10 w-10 text-[#4F46E5] animate-spin" />
        <p className="mt-4 text-gray-500 text-sm">Loading workspaces…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-[#4F46E5] hover:underline text-sm font-medium"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Your <span className="text-[#4F46E5]">Workspaces</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Select a workspace to continue or create a new one.
          </p>
        </div>
        <button
          onClick={onCreateNew}
          className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-2.5 px-5 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5" />
          New Workspace
        </button>
      </div>

      {/* Empty state */}
      {workspaces.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="h-20 w-20 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-6">
            <Briefcase className="h-10 w-10 text-[#4F46E5]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No workspaces yet
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-sm">
            Get started by creating your first workspace to organize your tasks
            and projects.
          </p>
          <button
            onClick={onCreateNew}
            className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-5 w-5" />
            Create Your First Workspace
          </button>
        </div>
      ) : (
        /* Workspace grid */
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workspaces.map((ws) => (
            <button
              key={ws._id}
              onClick={() => handleSelect(ws)}
              className="group text-left bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#4F46E5] hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-[#EEF2FF] group-hover:bg-[#4F46E5] flex items-center justify-center transition-colors duration-200">
                  <Briefcase className="h-6 w-6 text-[#4F46E5] group-hover:text-white transition-colors duration-200" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[#4F46E5] transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                {ws.workspaceName}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 min-h-10">
                {ws.description || "No description"}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-400">
                  {ws.tasks?.length ?? 0}{" "}
                  {ws.tasks?.length === 1 ? "task" : "tasks"}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkspaceList;
