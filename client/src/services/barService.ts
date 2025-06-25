const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3310';

export const barService = {
  async getBarById(id: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bars/${id}`);
      
      if (response.status === 404) {
        throw new Error('Bar not found');
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching bar:', error);
      
      if (error instanceof Error && error.message === 'Bar not found') {
        throw error;
      }
      
      throw new Error('Failed to fetch bar details. Please make sure the server is running.');
    }
  },

  async getAllBars() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bars`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching bars:', error);
      throw new Error('Failed to fetch bars. Please make sure the server is running.');
    }
  },

  async getBarEvents(barId: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bars/${barId}/events`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching bar events:', error);
      throw new Error('Failed to fetch bar events. Please make sure the server is running.');
    }
  },

  async getUpcomingEvents(limit: number = 10) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/events/upcoming?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      throw new Error('Failed to fetch upcoming events. Please make sure the server is running.');
    }
  }
}; 