import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HandleCreateWokSpace } from "@/Features/SemiColnApp/services/services";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";

const workspaceSchema = z.object({
  workspaceName: z
    .string()
    .min(1, "Workspace name is required")
    .max(100, "Workspace name must be at most 100 characters"),
  workspaceDescription: z
    .string()
    .min(1, "Workspace description is required")
    .max(500, "Workspace description must be at most 500 characters"),
});

type WorkspaceFormValues = z.infer<typeof workspaceSchema>;

interface WorkspaceFormProps {
  onBack: () => void;
}

const WorkspaceForm = ({ onBack }: WorkspaceFormProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkspaceFormValues>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      workspaceName: "",
      workspaceDescription: "",
    },
  });

  const onSubmit = async (data: WorkspaceFormValues) => {
    try {
      const res = await HandleCreateWokSpace(data);
      toast.success(res.message ?? "Workspace created!");
      navigate("/Semicoln/app");
    } catch {
      toast.error("Failed to create workspace. Please try again.");
    }
  };

  return (
    <div>
      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-[#4F46E5] font-medium text-sm mb-6 transition-colors duration-200 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Workspaces
      </button>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create A <span className="text-[#4F46E5]">Workspace</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Give your workspace a name and description to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="workspaceName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title your workspace
          </label>
          <input
            id="workspaceName"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
            placeholder="Enter workspace name"
            {...register("workspaceName")}
          />
          {errors.workspaceName ? (
            <p className="mt-2 text-xs text-red-500">
              {errors.workspaceName.message}
            </p>
          ) : (
            <p className="mt-2 text-xs text-gray-400">
              Choose a memorable name for your workspace
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="workspaceDescription"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Describe your workspace
          </label>
          <textarea
            id="workspaceDescription"
            rows={4}
            className="w-full h-15 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
            placeholder="Enter workspace description"
            {...register("workspaceDescription")}
          />
          {errors.workspaceDescription ? (
            <p className="mt-2 text-xs text-red-500">
              {errors.workspaceDescription.message}
            </p>
          ) : (
            <p className="mt-2 text-xs text-gray-400">
              Briefly describe what this workspace is for
            </p>
          )}
        </div>

        <div className="flex justify-between gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? "Creating…" : "Create Workspace"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/Semicoln/app")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Skip
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkspaceForm;
