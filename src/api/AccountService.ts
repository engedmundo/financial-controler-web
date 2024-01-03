import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import AccountApiResponse from '../types/AccountsApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class AccountApiService {
  static async listAccounts() {
    try {
      const url = `${BASE_URL}/accounts/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<AccountApiResponse[]> = await axios.get(url, { headers });
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
export default AccountApiService;