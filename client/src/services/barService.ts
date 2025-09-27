export const barService = {
  async getBarById(id: number) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bars/${id}`,
      );

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
