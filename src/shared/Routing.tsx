import { Route, Routes } from "react-router-dom";
import ForgotPassword from "@/App/Auth/ForgotPassword";
import Login from "@/App/Auth/Login";
import Signup from "@/App/Auth/Signup";
import CreateWorkSpace from "@/App/[Semicoln-App]/CreateWorkSpace";
import AuthProviders from "@/Features/auth/AuthProviders";
import Semicoln from "@/App/[Semicoln-App]/Semicoln";
import AppLayout from "@/Features/SemiColnApp/components/layout/Applayout";
import Tasks from "@/App/[Semicoln-App]/Tasks";
import Settings from "@/App/[Semicoln-App]/Settings";
import NotFound from "@/App/[Semicoln-App]/Not-found";
import TaskDetails from "@/App/[Semicoln-App]/TaskDetails";
import Profile from "@/App/[Semicoln-App]/Profile";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthProviders />}>
        <Route index element={<CreateWorkSpace />} />
        <Route path="Semicoln" element={<AppLayout />}>
          <Route path="app" element={<Semicoln />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:id" element={<TaskDetails />} />
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
  );
};

export default Routing;
