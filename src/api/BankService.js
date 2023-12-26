import axios from 'axios';
import AuthApiService from './AuthService';


class BankApiService {
  static async listBanks() {
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/banks/`;
      const isAuthenticated = AuthApiService.checkAcessTokenValidity()

      if (isAuthenticated) {
        const headers = AuthApiService.mountHeaders();
        const response = await axios.get(url, { headers });
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return error.response.status;
      }
      console.error('Erro desconhecido:', error);
      return 500;
    }
  }
}

export default BankApiService;
