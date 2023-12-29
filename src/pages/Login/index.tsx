import LoginForm from '../../components/LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className='container'>
      <div className={styles.loginContainer}>
        <h1 className={`${styles.title}`}>Personal Finance App</h1>
        <p className={styles.subtitle}>Seja bem vindo!</p>
        <p className={styles.subtitle}>Insira suas credenciais para acessar o sistema</p>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
