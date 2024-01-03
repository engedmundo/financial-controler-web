import { Container } from 'react-bootstrap';
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
            <th className={styles.tableMainColumn}>Nome do banco</th>
            <th className={styles.tableSecondaryColumn}>Código</th>
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
