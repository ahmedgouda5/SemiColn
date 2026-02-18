import WorkSpaceImage from "../../assets/images/WorkSpace.png";
import { useNavigate } from "react-router-dom";
const CreateWorkSpace = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/Semicoln-App");
  };
  return (
    <div className="flex items-center justify-center min-h-screen  w-full bg-linear-to-br  p-2 ">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="workspaceName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title your workspace
              </label>
              <input
                id="workspaceName"
                name="workspaceName"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
                placeholder="Enter workspace name"
              />
              <p className="mt-2 text-xs text-gray-400">
                Information about the label
              </p>
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
                name="workspaceDescription"
                rows={4}
                required
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
              />

              <p className="mt-2 text-xs text-gray-400">
                Information about the label
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Next
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
