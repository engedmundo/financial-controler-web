import React from 'react'
import { TransactionSummary } from '../../types/TransactionsApiReponse';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './SummaryCards.module.css';

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
              <Card.Title>Despesas</Card.Title>
              <Card.Text>
                R$ {data.expense.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Receitas</Card.Title>
              <Card.Text>
                R$ {data.receipt.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>Saldo</Card.Title>
              <Card.Text>
                R$ {data.balance.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SummaryCards
