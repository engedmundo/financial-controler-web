import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MainMenu = () => {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
