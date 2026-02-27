import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EditAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full py-2.5 bg-[#4A5FE8] text-white text-sm font-medium rounded-md hover:bg-[#3B4DD4] transition-colors">
          Edit
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md rounded-2xl">
        <AlertDialogHeader className="mb-4 flex justify-between items-center">
          <AlertDialogTitle className="text-xl font-semibold text-gray-900">
            Edit Profile
          </AlertDialogTitle>
          <AlertDialogCancel className="border border-gray-200 text-gray-700 hover:bg-gray-50">
            <X size={20} />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fullname
            </label>
            <input
              id="fullname"
              type="text"
              defaultValue="Emmanuel Adeeko"
              className="w-full px-4 py-2.5 border border-[#4A5FE8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              defaultValue="emmy4sure.web@gmail.com"
              className="w-full px-4 py-2.5 border border-[#4A5FE8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                defaultValue="password"
                className="w-full px-4 py-2.5 pr-10 border border-[#4A5FE8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5FE8] focus:border-transparent text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="mt-6">
         
          <AlertDialogAction className="w-full bg-primary-Blue hover:bg-none text-white font-semibold rounded-lg">
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditAccount;
