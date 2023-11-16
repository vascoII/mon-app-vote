// context/CandidateContext.tsx
import { createContext, Dispatch, SetStateAction } from "react";
import { CandidateInterface } from "../../interface/CandidateInterface";

interface CandidateContextType {
  candidate: CandidateInterface | null;
  setCandidate: Dispatch<SetStateAction<CandidateInterface | null>>;
}

const CandidateContext = createContext<CandidateContextType | null>(null);

export default CandidateContext;
