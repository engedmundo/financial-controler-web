import { useState } from 'react';
import * as Styled from './styles';
import { Button, Card, Form } from 'react-bootstrap';
import AuthApiService from '../../api/AuthService';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await AuthApiService.login(username, password);
    if (response === 200) {
      navigate('/');
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Styled.CardContainer>
      <Card.Body>
        <Card.Title>Finance App</Card.Title>
        <Card.Text>
          Entre com suas credenciais de acesso
        </Card.Text>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entre com seu nome de usuário"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entre com a sua senha"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="outline-dark" onClick={handleLogin}>
            Entrar
          </Button>
        </Form>
      </Card.Body>
    </Styled.CardContainer>
  )
}
