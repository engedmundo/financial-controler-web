import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import { MyFamilyApiResponse } from '../types/MyFamilyApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class FamilyApiService {
  static async getMyFamily(): Promise<MyFamilyApiResponse> {
    try {
      const url = `${BASE_URL}/my-family/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<MyFamilyApiResponse> = await axios.get(url, { headers });
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
export default FamilyApiService;