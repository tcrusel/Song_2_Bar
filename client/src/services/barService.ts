import { URL } from "@/config/api";

export const barService = {
  async getBarById(id: number) {
    try {
      const response = await fetch(`${URL}/api/bars/${id}`);

      if (response.status === 404) {
        throw new Error("Bar not found");
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching bar:", error);
      throw new Error("Failed to fetch bar details");
    }
  },
};
