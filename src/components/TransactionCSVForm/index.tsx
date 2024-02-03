import { Formik, Field, Form } from "formik";
import styles from './TransactionCSVForm.module.css';
import { transactionCSVFormValidationSchema } from "./valitationSchema";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountApiResponse from "../../types/AccountsApiReponse";
import AccountApiService from "../../api/AccountService";

interface TransactionCSVFormValues {
  account: number;
  creditCard?: number;
  additionalUser?: number;
  csvFile: File | null;
}

const TransactionCSVForm = () => {
  const formInitialValues: TransactionCSVFormValues = {
    account: 0,
    creditCard: undefined,
    additionalUser: undefined,
    csvFile: null,
  }
  const navigate = useNavigate();

  const [errorMessage] = useState('');
  const [accountsData, setAccountsData] = useState<AccountApiResponse[]>([]);
  // const [creditCards, setCreditCards] = useState([]);
  // const [familyUsers, setFamilyUsers] = useState([]);


  const fetchAccountsData = async () => {
    const response = await AccountApiService.listAccounts();
    setAccountsData(response);
    return
  }

  useEffect(() => {
    fetchAccountsData();
  }, []);

  const handleSubmit = async () => {
    console.log('enviado');
    navigate('/transactions');
  }

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={transactionCSVFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="account" className={styles.inputLabel}>Conta: </label>
              <Field as="select" id="account" name="account" className={styles.inputField}>
                <option value="" label="Selecione um valor" />
                {accountsData.map((item) => (
                  <option value={item.id} label={item.name} />
                ))}
              </Field>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="creditCard" className={styles.inputLabel}>Cartão de crédito: </label>
              <Field as="select" id="creditCard" name="creditCard" className={styles.inputField}>
                <option value="" label="Selecione um valor" />
                <option value="Teste" label="Um valor" />
              </Field>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="additionalUser" className={styles.inputLabel}>Usuário adicional: </label>
              <Field as="select" id="additionalUser" name="additionalUser" className={styles.inputField}>
                <option value="" label="Selecione um valor" />
                <option value="Teste" label="Um valor" />
              </Field>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="csvFile" className={styles.inputLabel}>Arquivo CSV: </label>
              <Field type="file" id="csvFile" name="csvFile" className={styles.inputField} />
              {errors.csvFile && touched.csvFile ? (
                <p className={styles.error}>{errors.csvFile}</p>
              ) : null}
            </div>
            <button type="submit" className={`btn btn-outline-dark ${styles.sendButton}`}>Enviar</button>
            {errorMessage ? (<p className={styles.error}>{errorMessage}</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TransactionCSVForm
