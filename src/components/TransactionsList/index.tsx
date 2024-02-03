import { Container } from 'react-bootstrap';
import styles from './TransactionsList.module.css';
import { getTransactionType } from '../../enums/TransactionType';
import { TransactionsData } from '../../types/TransactionsApiReponse';

interface TransactionsDataProps {
  data: TransactionsData[];
}

const TransactionsList: React.FC<TransactionsDataProps> = ({ data }) => {
  return (
    <Container className={styles.listContainer}>
      <table className={`${styles.tableContainer} mx-auto`}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableMainColumn}>Descrição</th>
            <th className={styles.tableSecondaryColumn}>Usuário</th>
            <th className={styles.tableSecondaryColumn}>Data</th>
            <th className={styles.tableSecondaryColumn}>Conta</th>
            <th className={styles.tableSecondaryColumn}>Cartão de Crédito</th>
            <th className={styles.tableSecondaryColumn}>Categoria</th>
            <th className={styles.tableSecondaryColumn}>Tipo</th>
            <th className={styles.tableSecondaryColumn}>Valor</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.user.first_name}</td>
              <td>{item.date}</td>
              <td>{item.account.name}</td>
              <td>{item.credit_card.name}</td>
              <td>{item.category.name}</td>
              <td>{getTransactionType(item.type)}</td>
              <td>R$ {Number(item.amount).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsList
