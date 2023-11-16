// services/gouv/scrutinService.tsx

import { ScrutinInterface } from "@/interface/ScrutinInterface";

interface ScrutinServiceResponse {
  success: boolean;
  scrutins?: ScrutinInterface[];
  message?: string;
}

export const getAllScrutin = async (): Promise<ScrutinServiceResponse> => {
  try {
    const response = await fetch("http://localhost:9090/scrutin/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const scrutins: ScrutinInterface[] = await response.json();

    return {
      success: true,
      scrutins,
    };
  } catch (error) {
    console.error(
      "Failed to get all scrutins",
      error instanceof Error ? error.message : "Unknown error"
    );
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An error occurred while requesting scrutins.",
    };
  }
};
