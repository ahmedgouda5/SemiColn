import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthProviders = () => {
  const [session] = useState(true);
  if (!session) {
    return <Navigate to="/Auth/Login" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthProviders;
