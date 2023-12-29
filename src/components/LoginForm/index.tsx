
import { Formik, Field, Form } from "formik";
import styles from './LoginForm.module.css';
import { loginFormValidationSchema } from "./valitationSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import AuthApiService from "../../api/AuthService";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const formInitialValues: LoginFormValues = {
    username: '',
    password: '',
  }
  const navigate = useNavigate();

  const {
    setUsername,
    setAccessToken,
    setRefreshToken
  } = useContext(UserContext);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values: LoginFormValues) => {
    const response = await AuthApiService.login(values.username, values.password);
    if (response.code === 200) {
      setUsername(values.username);
      setAccessToken(response.accessToken!);
      setRefreshToken(response.refreshToken!);
      navigate('/');
    } else {
      setErrorMessage(response.message!);
    }
  }

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
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
              />
              {errors.password && touched.password ? (
                <p className={styles.error}>{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" className={`btn btn-outline-dark ${styles.sendButton}`}>Entrar</button>
            {errorMessage ? (<p className={styles.error}>{errorMessage}</p>) : null}
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default LoginForm
