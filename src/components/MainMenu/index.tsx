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
            Minhas Finanças
            <ul className={styles.dropdown}>
              <li>
                <Link to="#">Histórico das contas</Link>
              </li>
              <li>
                <Link to="#">Orçamentos</Link>
              </li>
              <li>
                <Link to="/transactions" onClick={() => navigate('/transactions')}>Transações</Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            Gerenciamento de contas
            <ul className={styles.dropdown}>
              <li>
                <Link to="/accounts" onClick={() => navigate('/accounts')}>Minhas Contas</Link>
              </li>
              <li>
                <Link to="/credit-cards" onClick={() => navigate('/credit-cards')}>Meus Cartões</Link>
              </li>
              <li>
                <Link to="/banks" onClick={() => navigate('/banks')}>Bancos</Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}>
            Configurações
            <ul className={styles.dropdown}>
              <li>
                <Link to="#">Categorias</Link>
              </li>
              <li>
                <Link to="#">Minha família</Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.navItemRight}`}><a onClick={handleLogout}>Sair</a></li>
        </ul>
      </Container>
    </nav>
  );
};