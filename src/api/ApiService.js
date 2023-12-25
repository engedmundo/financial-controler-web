import axios from 'axios';

class ApiService {
  static async fetchData(url, params) {
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;
