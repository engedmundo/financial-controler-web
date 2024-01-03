import { Container } from 'react-bootstrap';
import styles from './AccountsList.module.css';
import { useEffect, useState } from 'react';
import AccountApiResponse from '../../types/AccountsApiReponse';
import AccountApiService from '../../api/AccountService';
import { getAccountType } from '../../enums/AccountType';


const AccountsList = () => {
  const [accountsData, setAccountsData] = useState<AccountApiResponse[]>([]);

  const fetchAccountsData = async () => {
    const response = await AccountApiService.listAccounts();
    setAccountsData(response);
    return
  }

  useEffect(() => {
    fetchAccountsData();
  }, []);

  return (
    <Container className={styles.listContainer}>
      <table className={`${styles.tableContainer} mx-auto`}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableMainColumn}>Conta</th>
            <th className={styles.tableSecondaryColumn}>Agência</th>
            <th className={styles.tableSecondaryColumn}>Número</th>
            <th className={styles.tableSecondaryColumn}>Tipo</th>
            <th className={styles.tableSecondaryColumn}>Usuário</th>
            <th className={styles.tableSecondaryColumn}>Banco</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {accountsData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.agency}</td>
              <td>{item.number}</td>
              <td>{getAccountType(item.type)}</td>
              <td>{item.user.first_name}</td>
              <td>{item.bank.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default AccountsList
