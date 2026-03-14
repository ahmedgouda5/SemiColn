import { Logout } from "./../../services/services";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const LogoutModel = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full py-3 px-4 bg-red-700 text-white text-sm font-medium rounded-md hover:bg-red-800 transition-colors">
          Log Out
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md rounded-2xl bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <AlertDialogHeader className="mb-2 mt-3">
          <AlertDialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-50">
            You are about to LogOut
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            You can always log on to your task manager and continue from where
            you left off.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 flex flex-row gap-3 justify-end">
          <AlertDialogCancel className="flex-1 bg-[#4A5FE8] text-white hover:bg-[#3B4DD4] border-0 rounded-lg text-sm font-medium py-2.5">
            No, This was a Mistake
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={Logout}
            className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-semibold py-2.5"
          >
            Yes, Log Me Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutModel;
