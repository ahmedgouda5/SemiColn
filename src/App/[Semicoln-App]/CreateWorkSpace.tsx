import WorkSpaceImage from "../../assets/images/WorkSpace.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HandleCreateWokSpace } from "@/Features/SemiColnApp/services/services";
import { toast } from "react-toastify";

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

const CreateWorkSpace = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkspaceFormValues>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      workspaceName: "",
      workspaceDescription: "",
    },
  });

  const onSubmit = async (data: WorkspaceFormValues) => {
    const res = await HandleCreateWokSpace(data);
    toast.done(res.message);
    navigate("/Semicoln/app");
  };
  return (
    <div className="flex items-center justify-center min-h-screen  w-full bg-linear-to-br dark:bg-gray-800 p-2 ">
      <div className="w-full  grid lg:grid-cols-2 gap-0  rounded-3xl  overflow-hidden  ">
        <section className="hidden lg:block">
          <img
            src={WorkSpaceImage}
            alt="WorkSpaceImage"
            className="w-full h-full object-cover"
          />
        </section>

        <section className="p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create A <span className="text-[#4F46E5]">Workspace</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Some text to fill in this space
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
                  Information about the label
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
                className="
      w-full
      h-15
      px-4 py-3
      border border-gray-300
      rounded-lg
      resize-none
      focus:ring-2 focus:ring-[#4F46E5]
      focus:border-transparent
      outline-none
      transition-all
    "
                placeholder="Enter workspace description"
                {...register("workspaceDescription")}
              />

              {errors.workspaceDescription ? (
                <p className="mt-2 text-xs text-red-500">
                  {errors.workspaceDescription.message}
                </p>
              ) : (
                <p className="mt-2 text-xs text-gray-400">
                  Information about the label
                </p>
              )}
            </div>

            <div className="flex justify-between gap-2">
              <button
                type="submit"
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Next
              </button>
              <button
                type="submit"
                onClick={() => navigate("/Semicoln/app")}
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Skip
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
