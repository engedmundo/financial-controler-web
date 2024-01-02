import Container from 'react-bootstrap/Container';
import AuthApiService from '../../api/AuthService';
import { Link, useNavigate } from 'react-router-dom';
import styles from './MainMenu.module.css';

export const MainMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthApiService.logout();
    navigate('/login');
  }

  return (
    <nav className={styles.navContainer}>
      <Container>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${styles.navItemLeft}`}>
            <Link to="/" onClick={() => navigate('/')}>Home</Link>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            <Link to="#">News</Link>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            Gerenciamento de contas
            <ul className={styles.dropdown}>
              <li>
                <Link to="/accounts" onClick={() => navigate('/accounts')}>Minhas Contas</Link>
              </li>
              <li>
                <Link to="#">Meus Cartões</Link>
              </li>
              <li>
                <Link to="/banks" onClick={() => navigate('/banks')}>Bancos</Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}><a onClick={handleLogout}>Sair</a></li>
        </ul>
      </Container>
    </nav>
  );
};