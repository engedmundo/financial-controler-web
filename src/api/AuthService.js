import axios from 'axios';

class AuthApiService {
  static async login(username, password) {
    try {
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/token/`;
      const response = await axios.post(url, { username, password });
      return response.data;
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status de erro (não 2xx)
        console.error('Erro de resposta do servidor:', error.response.status);

        if (error.response.status === 401) {
          // Tratar erro 401 (não autorizado)
          console.error('Usuário não autorizado. Redirecionar para a página de login.');
          // Implemente a lógica para redirecionar para a página de login ou mostrar uma mensagem de erro ao usuário
        } else {
          // Outros tratamentos de erro
          console.error('Erro desconhecido:', error.response.data);
        }
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error('Sem resposta do servidor. Verifique a conexão ou tente novamente mais tarde.');
      } else {
        // Erro durante a configuração da solicitação
        console.error('Erro ao configurar a solicitação:', error.message);
      }
    }
  }
}

export default AuthApiService;
