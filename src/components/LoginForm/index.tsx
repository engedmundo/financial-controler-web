
import { Formik, Field, Form } from "formik";
import styles from './LoginForm.module.css';
import { loginFormValidationSchema } from "./valitationSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const { username, setUsername } = useContext(UserContext);
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('form enviado');
    console.log(username);
    console.log(password);
  }



  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.inputLabel}>Usuário: </label>
              <Field name="username" type="text" className={styles.inputField} />
              {errors.username && touched.username ? (
                <p className={styles.error}>{errors.username}</p>
              ) : null}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Senha: </label>
              <Field 
                name="password" 
                type="password" 
                className={styles.inputField} 
                // onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && touched.password ? (
                <p className={styles.error}>{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" className={`btn btn-outline-dark ${styles.sendButton}`}>Entrar</button>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default LoginForm
