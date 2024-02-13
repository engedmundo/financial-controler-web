import axios, { AxiosResponse } from 'axios';
import AuthApiService, { AuthHeaders } from './AuthService';
import CategoryApiResponse from '../types/CategoryApiReponse';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

class CategoryApiService {
  static async listCategories() {
    try {
      const url = `${BASE_URL}/categories/`;
      const headers: AuthHeaders = await AuthApiService.getHeaders();
      const response: AxiosResponse<CategoryApiResponse[]> = await axios.get(url, { headers });
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response);
        return [];
      }
      console.error('Erro desconhecido:', error);
      throw new Error('Erro inesperado ao obter dados de listagem de categorias');
    }
  }
}
export default CategoryApiService;