// context/CandidatContext.tsx
import { createContext, Dispatch, SetStateAction } from "react";
import { CandidatInterface } from "../interface/CandidatInterface";

interface CandidatContextType {
  candidat: CandidatInterface | null;
  setCandidat: Dispatch<SetStateAction<CandidatInterface | null>>;
}

const CandidatContext = createContext<CandidatContextType | null>(null);

export default CandidatContext;
