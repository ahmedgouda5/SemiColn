import { useState } from "react";
import WorkSpaceImage from "../../assets/images/WorkSpace.png";
import WorkspaceList from "@/Features/SemiColnApp/components/WorkspacePage/WorkspaceList";
import WorkspaceForm from "@/Features/SemiColnApp/components/WorkspacePage/WorkspaceForm";
import ErrorBoundary from "@/shared/providers/ErrorBoundary";

type View = "list" | "form";

const CreateWorkSpace = () => {
  const [view, setView] = useState<View>("list");

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-linear-to-br dark:bg-gray-800 p-2">
      <div className="w-full grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden">
        {/* Left side — illustration */}
        <section className="hidden lg:block">
          <img
            src={WorkSpaceImage}
            alt="Workspace illustration"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Right side — toggled content */}
        <section className="p-12 flex flex-col justify-center">
          <ErrorBoundary>
            {view === "list" ? (
              <WorkspaceList onCreateNew={() => setView("form")} />
            ) : (
              <WorkspaceForm onBack={() => setView("list")} />
            )}
          </ErrorBoundary>
        </section>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
