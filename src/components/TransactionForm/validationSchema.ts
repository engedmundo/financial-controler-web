import * as Yup from 'yup';

export const transactionFormValidationSchema = Yup.object({
  category: Yup.number()
  .required("É necessário selecionar informar a categoria"),
  amount: Yup.number()
  .required("É necessário informar o valor da transação"),
  date: Yup.string()
  .required("É necessário informar a data da transação")
  .matches(
    /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "A data deve estar no formato YYYY-MM-DD"
  ),
  type: Yup.string()
  .required("É necessário informar o tipo da transação")
  .oneOf(['receipt', 'expense'], "O tipo de transação deve ser 'receipt' ou 'expense'"),
  description: Yup.string()
  .required("É necessário informar a descrição da transação"),
})