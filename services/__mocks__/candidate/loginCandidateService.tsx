// services/__mocks__/loginCandidateService.tsx

// Une fonction mock pour enregistrer un candidate
export const loginCandidate = async (candidateData: any) => {
  console.log("Mock loginCandidate called with:", candidateData);

  // Simulez une attente pour une promesse résolue
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Retournez un objet qui simule la réponse d'un smart contract
  return {
    success: true,
    candidateId: "mocked-candidate-id",
    candidateData: candidateData,
  };
};
