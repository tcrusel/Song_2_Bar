import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { UserType } from "../types/User";

interface UserContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const value = useContext(UserContext);

  if (value === null) {
    throw new Error("erreur");
  }

  return value;
};
