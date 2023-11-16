// services/gouv/loginElectorService.tsx

// Une fonction logger un elector
export const loginElector = async (electorData: {
  nationalId: string;
  password: string;
}) => {
  try {
    // Utilisez l'adresse de votre serveur backend et l'endpoint approprié
    const response = await fetch("http://localhost:9090/elector", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(electorData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      elector: data,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to login elector", error.message);
      return {
        success: false,
        message: error.message,
      };
    } else {
      // Si l'erreur n'est pas une instance de l'Error, vous pouvez retourner une chaîne générique
      console.error("Failed to login elector");
      return {
        success: false,
        message: "An error occurred while logging in.",
      };
    }
  }
};
