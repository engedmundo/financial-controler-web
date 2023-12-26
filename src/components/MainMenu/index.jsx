import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthApiService from '../../api/AuthService';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

export const MainMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthApiService.logout();
    navigate('/login');
  }

  const handleNavigateBanks = () => {
    navigate('/banks');
  }

  const handleNavigateHome = () => {
    navigate('/');
  }

  return (
    <Styled.NavContainer expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav.Link onClick={handleNavigateHome}>HOME</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Orçamento</Nav.Link>
            <Nav.Link href="#link">Realizados</Nav.Link>
            <NavDropdown title="Gerenciar Contas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Contas</NavDropdown.Item>
              <NavDropdown.Item href="#">Cartões de Crédito</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleNavigateBanks}>Bancos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Styled.NavContainer>
  );
};
