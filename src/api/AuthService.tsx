import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

interface AuthResponse {
  code: number;
  message?: string;
  accessToken?: string;
  refreshToken?: string;
}

interface AuthHeaders {
  Authorization: string;
  'Content-Type': string;
}

class AuthApiService {
  public static async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const url = `${BASE_URL}/token/`;
      const response = await axios.post(url, { username, password });
      const { access, refresh } = response.data;
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('accessToken', access);
      sessionStorage.setItem('refreshToken', refresh);
      return {
        code: response.status,
        accessToken: access,
        refreshToken: refresh,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const responseError: AxiosResponse = error.response;
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
      console.error('Erro inesperado', error);
      throw new Error('Erro inesperado ao processar a autenticação');
    }
  }

  public static logout(): void {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return
  }

  public static async getHeaders(accessToken: string, refreshToken: string): Promise<AuthHeaders> {
    const validityResponse = await this.checkAccessTokenValidity(accessToken);

    if (validityResponse.code !== 200) {
      try {
        const refreshResponse = await this.refreshAccessToken(refreshToken);
        return {
          'Authorization': `Bearer ${refreshResponse.accessToken}`,
          'Content-Type': 'application/json',
        }
      } catch (error) {
        console.error('Falha ao obter accessToken após atualização', error);
        throw new Error('Falha ao obter accessToken após atualização');
      }
    }
    return {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
  }

  private static async checkAccessTokenValidity(accessToken: string): Promise<AuthResponse> {
    try {
      const url = `${BASE_URL}/token/verify/`;
      const response = await axios.post(url, { token: accessToken });
      return {
        code: response.status,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const responseError: AxiosResponse = error.response;
        return {
          code: responseError.status,
          message: responseError.data.detail
        }
      }
      console.error('Access | Erro inesperado', error);
      throw new Error('Erro inesperado ao processar a autenticação');
    }
  }

  static async refreshAccessToken(refreshToken: string): Promise<AuthResponse> {
    try {
      const url = `${BASE_URL}/token/refresh/`;
      const response = await axios.post(url, { refresh: refreshToken });
      const accessToken = response.data;
      sessionStorage.setItem("accessToken", accessToken);
      return {
        code: response.status,
        accessToken,
      };

    } catch (error) {
      console.error('Erro durante a atualização do token de acesso', error);
      throw new Error('Falha ao atualizar o token de acesso');
    }
  }


}

export default AuthApiService;