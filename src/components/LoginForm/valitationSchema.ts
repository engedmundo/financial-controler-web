import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  username: Yup.string().required("*O nome de usuário é obrigatório"),
  password: Yup.string().min(3, '*A senha deve ter pelo menos 3 caracteres').required('*A senha é obrigatória'),
})