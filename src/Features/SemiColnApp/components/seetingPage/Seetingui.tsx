import { useEffect, useState } from "react";
import { useTheme } from "@/components/Providers/theme-provider";
import EditAccount from "./EditAccount";
import LogoutModel from "./LogoutModel";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateThemeState = () => {
      if (theme === "dark") {
        setIsDarkMode(true);
        return;
      }
      if (theme === "light") {
        setIsDarkMode(false);
        return;
      }

      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    updateThemeState();
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", updateThemeState);
    return () => media.removeEventListener("change", updateThemeState);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center p-6  border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        </div>
        <div className="bg-gray-50">
          <div className="flex justify-between items-center p-6  ">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Account Settings
            </h2>
            <div>
              <LogoutModel />
            </div>
          </div>

          <div className="p-6 border-b border-gray-200 rounded-lg shadow-sm">
            <div className="mb-4 border border-gray-200 rounded-lg p-4">
              <label className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z" />
                  </svg>
                </div>
                Display Name
              </label>
              <div className="text-xl font-bold text-gray-900">Ahmed Gouda</div>
            </div>

            <div className="mb-4 border border-gray-200 rounded-lg p-4">
              <label className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                Email Address
              </label>
              <div className="text-xl font-bold text-gray-900">
                ahmed@semicoln.com
              </div>
            </div>

            <div className="mb-6 border border-gray-200 rounded-lg p-4">
              <label className="text-sm text-gray-600 mb-2 block">
                Password
              </label>
              <div className="text-xl font-bold text-gray-900 tracking-wider">
                ••••••••
              </div>
            </div>

            <EditAccount />
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">
            Notification Settings
          </h2>

          <div className="space-y-4 bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600">
              Allow Desktop Notifications
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">
                Send Critical Notifications to My Email
              </span>
              <button
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  // eslint-disable-next-line no-constant-condition
                  true ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    // eslint-disable-next-line no-constant-condition
                    true ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">
            Accessibility Settings
          </h2>

          <div className="space-y-4 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">Enable Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDarkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-pressed={isDarkMode}
                type="button"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Personalize Webpage Theme
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
