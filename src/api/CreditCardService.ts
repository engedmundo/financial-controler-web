import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import CreditCardApiResponse  from '../types/CreditCardsApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class CreditCardApiService {
  static async listCards() {
    try {
      const url = `${BASE_URL}/credit-cards/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<CreditCardApiResponse[]> = await axios.get(url, { headers });
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        return [];
      }
      console.error('Erro desconhecido:', error);
      throw new Error('Erro inesperado ao obter dados de listagem de contas');
    }
  }
}
export default CreditCardApiService;