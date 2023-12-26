import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthApiService from '../../api/AuthService';
import { useNavigate } from 'react-router-dom';

export const MainMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthApiService.logout();
    navigate('/login');
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Finance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Orçamento</Nav.Link>
            <Nav.Link href="#link">Realizados</Nav.Link>
            <NavDropdown title="Gerenciar Contas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Contas</NavDropdown.Item>
              <NavDropdown.Item href="#">Cartões de Crédito</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Bancos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
