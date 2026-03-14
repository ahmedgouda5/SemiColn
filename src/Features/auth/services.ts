import { toast } from "react-toastify";
import { useUserStore } from "@/store/UserStore";
import type { ILogin, ISignup } from "./type";

const BASE_URL = "http://localhost:3000/Auth";

export const signup = async (data: ISignup) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    toast.error(result?.message || "Signup failed");
    throw new Error(result?.message);
  }

  toast.success("Account created successfully");

  return result;
};

export const login = async (data: ILogin) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    toast.error(result?.message || "Login failed");
    throw new Error(result?.message);
  }
  const user = result?.user;
  if (user) {
    useUserStore.getState().setUser(
      user.username ?? user.name ?? "",
      user.email ?? ""
    );
  }

  localStorage.setItem("token", result.token);
  localStorage.setItem("userId", result.user.id);

  toast.success("Login successfully");

  return result;
};

