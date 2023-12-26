import axios from 'axios';

class AuthApiService {
  static async login(username, password) {
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/token/`;
      const response = await axios.post(url, { username, password });
      const { access, refresh } = response.data;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      return response.status;

    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return error.response.status;
      }
      console.error('Erro desconhecido:', error);
      return 500;
    }
  }

  static logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return
  }

  static async checkAcessTokenValidity() {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const url = `${process.env.REACT_APP_API_BASE_URL}/token/verify/`;
      const response = await axios.post(url, { token: accessToken });
      return response.status;
    } catch (error) {
      if (error.response.status === 401) {
        try {
          const refreshResponse = this.refreshAccessToken();
          return refreshResponse.status;
        } catch (error) {
          console.error('Falha ao atualizar access token', error);
          return 401;
        }
      }
      console.error('Erro desconhecido:', error);
      return 500;
    }
  }

  static async refreshAccessToken() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const url = `${process.env.REACT_APP_API_BASE_URL}/token/refresh/`;
      const response = await axios.post(url, { refresh: refreshToken });
      const { access } = response.data;
      localStorage.setItem("accessToken", access);
      return response.status;

    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        return error.response.status;
      }
      console.error('Erro desconhecido:', error);
      return 500;
    }
  }

  static mountHeaders() {
    return {
      'Authorization': `Bearer ${localStorage.accessToken}`,
      'Content-Type': 'application/json',
    }
  }
}

export default AuthApiService;
