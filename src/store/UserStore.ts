import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userName: string | null;
  email: string | null;
  id:string|null;
  token:string|null;
  setUser: (userName: string, email: string, id: string, token: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userName: null,
      email: null,
      id:null,
      token:null,
      setUser: (userName, email, id, token) => set({ userName, email, id, token }),
      clearUser: () => set({ userName: null, email: null, id: null, token: null }),
    }),
    {
      name: "semicoln-user",
      partialize: (state) => ({
        userName: state.userName,
        email: state.email,
        id: state.id,
        token: state.token,
      }),
    }
  )
);
