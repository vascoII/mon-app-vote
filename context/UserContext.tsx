// context/UserContext.tsx
import { createContext, Dispatch, SetStateAction } from "react";
import { UserInterface } from "../interface/UserInterface";

interface UserContextType {
  user: UserInterface | null;
  setUser: Dispatch<SetStateAction<UserInterface | null>>;
}

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
