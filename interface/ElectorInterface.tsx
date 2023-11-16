//interface/ElectorInterface.tsx

export interface ElectorElectionData {
  validatedCandidateId?: string;
  votedForCandidateId?: string;
}

export interface ElectorInterface {
  nationalId: string;
  firstName: string;
  lastName: string;
  elections?: { [electionId: string]: ElectorElectionData };
}
