import { Container } from 'react-bootstrap';
import styles from './CreditCardList.module.css';
import { useEffect, useState } from 'react';
import CreditCardApiService from '../../api/CreditCardService';
import CreditCardApiResponse from '../../types/CreditCardsApiReponse';


const CreditCardsList = () => {
  const [creditCardsData, setCreditCardsData] = useState<CreditCardApiResponse[]>([]);

  const fetchCreditCardsData = async () => {
    const response = await CreditCardApiService.listCards();
    setCreditCardsData(response);
    return
  }

  useEffect(() => {
    fetchCreditCardsData();
  }, []);

  return (
    <Container className={styles.listContainer}>
      <table className={`${styles.tableContainer} mx-auto`}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableMainColumn}>Cartão</th>
            <th className={styles.tableSecondaryColumn}>Usuário</th>
            <th className={styles.tableSecondaryColumn}>Limite</th>
            <th className={styles.tableSecondaryColumn}>Dia Vencimento</th>
            <th className={styles.tableSecondaryColumn}>Banco</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {creditCardsData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.user.first_name}</td>
              <td>R$ {item.expense_limit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td>{item.payment_day}</td>
              <td>{item.bank.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default CreditCardsList
