import { Container, Table } from 'react-bootstrap';
import styles from './BanksList.module.css';
import { useEffect, useState } from 'react';
import BankApiService from '../../api/BankService';
import BankApiResponse from '../../types/BanksApiReponse';


const BanksList = () => {
  const [banksData, setBanksData] = useState<BankApiResponse[]>([]);

  const fetchBanksData = async () => {
    const response = await BankApiService.listBanks();
    setBanksData(response);
    return
  }

  useEffect(() => {
    fetchBanksData();
  }, []);

  return (
    <Container className={styles.listContainer}>
      <table className={`${styles.tableContainer} mx-auto`}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Nome do banco</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {banksData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default BanksList
