import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

interface AuthResponse {
  code: number;
  message?: string;
  accessToken?: string;
  refreshToken?: string;
}

class AuthApiService {
  static async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const url = `${BASE_URL}/token/`;
      const response = await axios.post(url, { username, password });
      const { access, refresh } = response.data;
      return {
        code: response.status,
        accessToken: access,
        refreshToken: refresh,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const responseError: AxiosResponse = error.response;
        console.log(responseError.data.detail);
        const errorMessage = responseError.data.detail;

        switch (responseError.status) {
          case (401):
            console.log(errorMessage, error);
            break
          case (400):
            console.log(errorMessage, error);
            break
        }
        return {
          code: responseError.status,
          message: errorMessage,
        }
      }
      console.log('Não é um erro do axios', error);
      throw new Error("Não é um erro do axios");
    }
  }

  // static logout() {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refreshToken");
  //   return
  // }

  // static async checkAcessTokenValidity() {
  //   try {
  //     const accessToken = localStorage.getItem("accessToken");
  //     const url = `${process.env.REACT_APP_API_BASE_URL}/token/verify/`;
  //     const response = await axios.post(url, { token: accessToken });
  //     return response.status;
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       try {
  //         const refreshResponse = this.refreshAccessToken();
  //         return refreshResponse.status;
  //       } catch (error) {
  //         console.error('Falha ao atualizar access token', error);
  //         return 401;
  //       }
  //     }
  //     console.error('Erro desconhecido:', error);
  //     return 500;
  //   }
  // }

  // static async refreshAccessToken() {
  //   try {
  //     const refreshToken = localStorage.getItem("refreshToken");
  //     const url = `${process.env.REACT_APP_API_BASE_URL}/token/refresh/`;
  //     const response = await axios.post(url, { refresh: refreshToken });
  //     const { access } = response.data;
  //     localStorage.setItem("accessToken", access);
  //     return response.status;

  //   } catch (error) {
  //     if (error.response.status === 401 || error.response.status === 400) {
  //       return error.response.status;
  //     }
  //     console.error('Erro desconhecido:', error);
  //     return 500;
  //   }
  // }

  // static mountHeaders() {
  //   return {
  //     'Authorization': `Bearer ${localStorage.accessToken}`,
  //     'Content-Type': 'application/json',
  //   }
  // }
}

export default AuthApiService;