import Table from 'react-bootstrap/Table';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
import BankApiService from '../../api/BankService';
import * as Styled from './styles';

export function BanksList() {
  const [banksData, setBanksData] = useState([]);

  const fetchBanksData = async () => {
    const response = await BankApiService.listBanks();
    setBanksData(response);
    return
  }

  useEffect(() => {
    fetchBanksData();
  }, []);

  return (
    <Styled.Container>
      <Styled.TableTitle>
        <h1>
          Listagem de bancos
        </h1>
      </Styled.TableTitle>
      <Table hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome do banco</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {banksData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Styled.Container>
  );
}
