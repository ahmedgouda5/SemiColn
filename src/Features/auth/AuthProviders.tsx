import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthProviders = () => {
  const [session, setSession] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setSession(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

 

  if (!session) {
    return <Navigate to="/Auth/Login" replace />;
  }

  return <Outlet />;
};

export default AuthProviders;