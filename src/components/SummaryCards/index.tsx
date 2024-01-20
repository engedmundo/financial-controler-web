import React from 'react'
import { TransactionSummary } from '../../types/TransactionsApiReponse';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './SummaryCards.module.css';
import { printBrMoney } from '../../utils/moneyUtils';

interface SummaryDataProps {
  data: TransactionSummary;
}


const SummaryCards: React.FC<SummaryDataProps> = ({ data }) => {
  return (
    <Container className={styles.cardContainer}>
      <Row>
        <Col>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Despesas: R$ {printBrMoney(data.expense.total)}</Card.Title>
              <Card.Text>
                <div>
                  <table className={`${styles.tableContainer} mx-auto`}>
                    <thead className={styles.tableHeader}>
                      <tr>
                        <th>Categoria</th>
                        <th colSpan={2} className='text-center'>Valor parcial</th>
                        <th colSpan={2} className='text-center'>Percentual</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                      {data.expense.categories.map((item, index) => (
                        <tr key={index}>
                          <td>{item.category}</td>
                          <td>R$</td>
                          <td className={styles.valueColumn}>{printBrMoney(item.total)}</td>
                          <td className={styles.valueColumn}>{printBrMoney(item.percentual)}</td>
                          <td>%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Receitas: R$ {printBrMoney(data.receipt.total)}</Card.Title>
              <Card.Text>
                <div>
                  <table className={`${styles.tableContainer} mx-auto`}>
                    <thead className={styles.tableHeader}>
                      <tr>
                        <th>Categoria</th>
                        <th colSpan={2} className='text-center'>Valor parcial</th>
                        <th colSpan={2} className='text-center'>Percentual</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                      {data.receipt.categories.map((item, index) => (
                        <tr key={index}>
                          <td>{item.category}</td>
                          <td>R$</td>
                          <td className={styles.valueColumn}>{printBrMoney(item.total)}</td>
                          <td className={styles.valueColumn}>{item.percentual}</td>
                          <td>%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col xs={2} md={2}>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Saldo</Card.Title>
              <Card.Text>
                R$ {printBrMoney(data.balance)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SummaryCards
