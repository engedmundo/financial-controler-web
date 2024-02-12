import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import { TransactionsApiResponse } from '../types/TransactionsApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class TransactionApiService {
  static async listTransactions(): Promise<TransactionsApiResponse> {
    try {
      const url = `${BASE_URL}/transactions/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<TransactionsApiResponse> = await axios.get(url, { headers });
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        throw new Error('Erro na resposta da API ao obter dados de transações');
      }
      console.error('Erro desconhecido:', error);
      throw new Error('Erro inesperado ao obter dados de transações');
    }
  }

  static async listTransactionsByFamily(family_id: number): Promise<TransactionsApiResponse> {
    try {
      const url = `${BASE_URL}/transactions/family/${family_id}/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<TransactionsApiResponse> = await axios.get(url, { headers });
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        throw new Error('Erro na resposta da API ao obter dados de transações');
      }
      console.error('Erro desconhecido:', error);
      throw new Error('Erro inesperado ao obter dados de transações');
    }
  }
}
export default TransactionApiService;