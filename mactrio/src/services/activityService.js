// src/services/activityService.js
import axios from 'axios';

const activityService = {
  getActivities: async () => {
    try {
      const response = await axios.get('http://localhost:4000/activities'); // URL de la API
      return response.data; // Devuelve los datos obtenidos
    } catch (error) {
      console.error('Error al obtener las actividades:', error);
      throw error;
    }
  }
};

export default activityService;