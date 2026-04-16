import { useEffect, useState } from "react";
import { useTheme } from "@/components/Providers/theme-provider";
import EditAccount from "./EditAccount";
import LogoutModel from "./LogoutModel";
import { useUserStore } from "@/store/UserStore";

const SettingsPage = () => {
  const userName = useUserStore((s) => s.userName);
  const email = useUserStore((s) => s.email);
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
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-950 dark:to-slate-900">
      <div className="max-w-6xl flex flex-col gap-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Settings
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Curate your workspace experience with tailored preferences.
          </p>
        </div>

        <div className="grid grid-cols-1   gap-6">
          <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/80 shadow-xl shadow-blue-100/40 dark:shadow-black/40 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                  Account Settings
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Manage your identity and security details.
                </p>
              </div>
              <LogoutModel />
            </div>

            <div className="p-6 space-y-4">
              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/80 p-5 bg-linear-to-br from-white to-blue-50/60 dark:from-gray-950 dark:to-gray-900">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z" />
                    </svg>
                  </div>
                  Display Name
                </label>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {userName ?? "user"}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/80 p-5 bg-linear-to-br from-white to-violet-50/60 dark:from-gray-950 dark:to-gray-900">
                <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  Email Address
                </label>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {email ?? "Email"}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/80 p-5 bg-linear-to-br from-white to-slate-50 dark:from-gray-950 dark:to-gray-900">
                <label className="text-xs uppercase tracking-wide text-gray-500 mb-2 block">
                  Password
                </label>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-50 tracking-[0.35em]">
                  ••••••••
                </div>
              </div>

              <div className="pt-2">
                <EditAccount />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/60 dark:border-white/5 bg-linear-to-br from-white via-white to-blue-50/70 dark:from-gray-950 dark:via-gray-950 dark:to-slate-900 shadow-2xl shadow-blue-200/40 dark:shadow-black/60 backdrop-blur p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 font-semibold">
                    Notifications
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Signal Control
                  </h2>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                  Smart
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                        Desktop Alerts
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Get real-time updates while you work.
                      </p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/60 dark:border-white/5 bg-linear-to-br from-white via-slate-50 to-slate-100/70 dark:from-gray-950 dark:via-gray-950 dark:to-slate-900 shadow-2xl shadow-slate-200/40 dark:shadow-black/60 backdrop-blur p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 font-semibold">
                    Accessibility
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Visual Comfort
                  </h2>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-gray-900/10 text-gray-700 dark:bg-white/10 dark:text-gray-200">
                  Theme
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/70 p-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Dark Mode
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Match your workspace lighting automatically.
                    </p>
                  </div>
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

                <div className="rounded-2xl border border-dashed border-gray-200/70 dark:border-gray-700/80 p-4 text-xs text-gray-500 dark:text-gray-400">
                  Personalize webpage theme to match your workspace.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-blue-500/40 bg-linear-to-br from-blue-600 via-indigo-700 to-slate-900 text-white shadow-2xl shadow-blue-500/30 dark:shadow-black/70 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Premium Workspace
              </h3>
              <p className="mt-3 text-lg font-semibold">
                Unlock advanced controls and priority support.
              </p>
              <p className="mt-2 text-sm text-white/80">
                Upgrade your workspace settings for deeper customization.
              </p>
              <button className="mt-4 h-10 px-4 rounded-full bg-white text-blue-800 text-sm font-semibold hover:bg-white/90">
                Explore upgrades
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
