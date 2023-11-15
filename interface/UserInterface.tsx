//interface/UserInterface.tsx

export interface UserElectionData {
  validatedCandidateId?: string;
  votedForCandidateId?: string;
}

export interface UserInterface {
  nationalId: string;
  firstName: string;
  lastName: string;
  elections?: { [electionId: string]: UserElectionData };
}
