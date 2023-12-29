import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/banks">Bancos</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/accounts">Contas</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
