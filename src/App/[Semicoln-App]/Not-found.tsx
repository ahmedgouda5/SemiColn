import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
            <SearchX className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-[7rem] font-black leading-none text-blue-600 tracking-tighter select-none">
          404
        </h1>

        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-4" />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Looks like this page doesn't exist in your workspace.
          <br />
          Head back and stay productive!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate("/Auth/Login")}
            variant="outline"
            className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back to Login
          </Button>

          <Button
            onClick={() => navigate("/Semicoln-App")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Home className="w-4 h-4" />
            Back to Overview
          </Button>
        </div>

        <p className="mt-10 text-xs text-gray-400 tracking-widest uppercase">
          Semicolon Task Management
        </p>
      </div>
    </div>
  );
};

export default NotFound;