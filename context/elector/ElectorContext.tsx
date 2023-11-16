// context/ElectorContext.tsx
import { createContext, Dispatch, SetStateAction } from "react";
import { ElectorInterface } from "../../interface/ElectorInterface";

interface ElectorContextType {
  elector: ElectorInterface | null;
  setElector: Dispatch<SetStateAction<ElectorInterface | null>>;
}

const ElectorContext = createContext<ElectorContextType | null>(null);

export default ElectorContext;
