import { Formik, Field, Form } from "formik";
import styles from './TransactionForm.module.css';
import { useEffect, useState } from "react";
import AccountApiResponse from "../../types/AccountsApiReponse";
import AccountApiService from "../../api/AccountService";
import { TransactionsRegisterForm } from "../../types/TransactionsRegisterForm";
import { transactionFormValidationSchema } from "./validationSchema";
import CreditCardApiResponse from "../../types/CreditCardsApiReponse";
import CreditCardApiService from "../../api/CreditCardService";
import CategoryApiResponse from "../../types/CategoryApiReponse";
import CategoryApiService from "../../api/CategoryService";
import TransactionApiService from "../../api/TransactionService";

interface TransactionFormProps {
  onSubmit: (success: boolean) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [accountsData, setAccountsData] = useState<AccountApiResponse[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCardApiResponse[]>([]);
  const [categories, setCategories] = useState<CategoryApiResponse[]>([]);
  const [sucessMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchAccountsData = async () => {
      const response = await AccountApiService.listAccounts();
      setAccountsData(response);
    }

    const fetchCreditCardsData = async () => {
      const response = await CreditCardApiService.listCards();
      setCreditCards(response);
    }

    const fetchCategoryData = async () => {
      const response = await CategoryApiService.listCategories();
      setCategories(response);
    }

    fetchAccountsData();
    fetchCreditCardsData();
    fetchCategoryData();
  }, []);

  const formInitialValues: TransactionsRegisterForm = {
    account: undefined,
    credit_card: undefined,
    category: 0,
    amount: 0,
    date: '',
    type: '',
    description: '',
  }

  const handleSubmit = async (values: TransactionsRegisterForm) => {
    try {
      await TransactionApiService.createTransaction(values);
      setSuccessMessage('Transação criada com sucesso!');
      onSubmit(true);
    } catch (error) {
      setErrorMessage('Erro ao criar transação!');
      console.error("Error creating transaction:", error);
      onSubmit(false);
    }
  }

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={transactionFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="account" className={styles.inputLabel}>Conta: </label>
              <Field as="select" id="account" name="account" className={styles.inputField}>
                <option value={undefined} label="Selecione uma conta" />
                {accountsData.map((item) => (
                  <option key={item.id} value={item.id} label={item.name} />
                ))}
              </Field>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="creditCard" className={styles.inputLabel}>Cartão de crédito: </label>
              <Field as="select" id="creditCard" name="creditCard" className={styles.inputField}>
                <option value={undefined} label="Selecione um cartão de crédito" />
                {creditCards.map((item) => (
                  <option key={item.id} value={item.id} label={item.name} />
                ))}
              </Field>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="category" className={styles.inputLabel}>Categoria: </label>
              <Field as="select" id="category" name="category" className={styles.inputField}>
                <option value={undefined} label="Selecione uma categoria" />
                {categories.map((item) => (
                  <option key={item.id} value={item.id} label={item.name} />
                ))}
              </Field>
              {errors.category && touched.category ? (<p className={styles.error}>{errors.category}</p>) : null}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="type" className={styles.inputLabel}>Tipo: </label>
              <Field as="select" id="type" name="type" className={styles.inputField} >
                <option value="expense" label="Despesa" />
                <option value="receipt" label="Receita" />
              </Field>
              {errors.type && touched.type ? (<p className={styles.error}>{errors.type}</p>) : null}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="amount" className={styles.inputLabel}>Valor: </label>
              <Field type="number" id="amount" name="amount" className={styles.inputField} />
              {errors.amount && touched.amount ? (<p className={styles.error}>{errors.amount}</p>) : null}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="date" className={styles.inputLabel}>Data: </label>
              <Field type="date" id="date" name="date" className={styles.inputField} />
              {errors.date && touched.date ? (<p className={styles.error}>{errors.date}</p>) : null}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="description" className={styles.inputLabel}>Descrição: </label>
              <Field type="text" id="description" name="description" className={styles.inputField} />
              {errors.description && touched.description ? (<p className={styles.error}>{errors.description}</p>) : null}
            </div>

            <button type="submit" className={`btn btn-outline-dark ${styles.sendButton}`}>Enviar</button>
            {errorMessage ? (<p className={styles.error}>{errorMessage}</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TransactionForm
