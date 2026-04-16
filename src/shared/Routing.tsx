import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "@/App/Auth/ForgotPassword";
import Login from "@/App/Auth/Login";
import Signup from "@/App/Auth/Signup";
import CreateWorkSpace from "@/App/[Semicoln-App]/CreateWorkSpace";
import AuthProviders from "@/Features/auth/AuthProviders";
import AppLayout from "@/Features/SemiColnApp/components/layout/Applayout";
import NotFound from "@/App/[Semicoln-App]/Not-found";

const Semicoln = lazy(() => import("@/App/[Semicoln-App]/Semicoln"));
const Tasks = lazy(() => import("@/App/[Semicoln-App]/Tasks"));
const TaskDetails = lazy(() => import("@/App/[Semicoln-App]/TaskDetails"));
const Profile = lazy(() => import("@/App/[Semicoln-App]/Profile"));
const Settings = lazy(() => import("@/App/[Semicoln-App]/Settings"));
const Chat = lazy(() => import("@/App/[Semicoln-App]/Chat"));
const Notifications = lazy(() => import("@/App/[Semicoln-App]/Notifications"));

const Routing = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-sm text-gray-500">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AuthProviders />}>
          <Route index element={<CreateWorkSpace />} />
          <Route path="Semicoln" element={<AppLayout />}>
            <Route path="app" element={<Semicoln />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="tasks/:id" element={<TaskDetails />} />
            <Route path="chat" element={<Chat />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="Auth">
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
