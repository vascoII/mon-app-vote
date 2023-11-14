// services/__mocks__/registerCandidateService.js

// Une fonction mock pour enregistrer un candidat
export const registerCandidate = async (candidateData: any) => {
  console.log("Mock registerCandidate called with:", candidateData);

  // Simulez une attente pour une promesse résolue
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Retournez un objet qui simule la réponse d'un smart contract
  return { success: true, candidateId: "mocked-candidate-id" };
};
