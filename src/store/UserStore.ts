import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userName: string | null;
  email: string | null;
  setUser: (userName: string, email: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userName: null,
      email: null,
      setUser: (userName, email) => set({ userName, email }),
      clearUser: () => set({ userName: null, email: null }),
    }),
    {
      name: "semicoln-user",
      partialize: (state) => ({ userName: state.userName, email: state.email }),
    }
  )
);
