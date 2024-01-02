import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import BankApiResponse from '../types/BanksApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class BankApiService {
  static async listBanks() {
    try {
      const url = `${BASE_URL}/banks/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<BankApiResponse[]> = await axios.get(url, { headers });
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        return [];
      }
      console.error('Erro desconhecido:', error);
      throw new Error('Erro inesperado ao obter dados de listagem de bancos');
    }
  }
}
export default BankApiService;