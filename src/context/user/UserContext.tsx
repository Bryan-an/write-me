import { User } from "firebase/auth";
import { createContext } from "react";

export interface UserStore {
  isAuthenticated: boolean;
  user: User | null;
  logIn: (params: { email: string; password: string }) => Promise<void>;
  register: (params: { email: string; password: string }) => Promise<void>;
  logOut: () => Promise<void>;
}

export const UserContext = createContext<UserStore>({} as UserStore);
