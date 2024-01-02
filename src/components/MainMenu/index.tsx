import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthApiService from '../../api/AuthService';
import { useNavigate } from 'react-router-dom';
import styles from './MainMenu.module.css';

export const MainMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthApiService.logout();
    navigate('/login');
  }

  const handleNavigateBanks = () => {
    navigate('/banks');
  }

  const handleNavigateAccounts = () => {
    navigate('/accounts');
  }

  const handleNavigateHome = () => {
    navigate('/');
  }

  return (
    <nav className={styles.navContainer}>
      <Container>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${styles.navItemLeft}`}>
            <a onClick={handleNavigateHome}>Home</a>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}><a href="#">News</a></li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            Gerenciamento de contas
            <ul className={styles.dropdown}>
              <li><a onClick={handleNavigateAccounts}>Minhas Contas</a></li>
              <li><a href="#">Meus Cartões</a></li>
              <li><a onClick={handleNavigateBanks}>Bancos</a></li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}><a onClick={handleLogout}>Sair</a></li>
        </ul>
      </Container>
    </nav>
  );
};