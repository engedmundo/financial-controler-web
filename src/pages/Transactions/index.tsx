import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading"
import TransactionsList from "../../components/TransactionsList"
import { TransactionSummary, TransactionsData } from "../../types/TransactionsApiReponse";
import TransactionApiService from "../../api/TransactionService";
import SummaryCards from "../../components/SummaryCards";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import TransactionCSVForm from "../../components/TransactionCSVForm";

const Transactions = () => {
  const [transactionsData, setTransactionsData] = useState<TransactionsData[]>([]);
  const [summaryData, setSummaryData] = useState<TransactionSummary>({
    receipt: 0,
    expense: 0,
    balance: 0,
  });
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const fetchTransactionsData = async () => {
    try {
      const response = await TransactionApiService.listTransactions();
      setTransactionsData(response.transactions);
      setSummaryData(response.summary)
      return
    } catch (error) {
      console.error("Error fetching transactions data:", error);
    }
  }

  useEffect(() => {
    fetchTransactionsData();
  }, []);

  return (
    <div>
      <PageHeading title={'Transações'} />
      <div className="mb-3">
        <Button variant="outline-dark" onClick={handleShowModal}>
          Cadastrar transações por CSV
        </Button>
      </div>
      <SummaryCards data={summaryData} />
      <TransactionsList data={transactionsData} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Inserir grupo de transações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionCSVForm />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Transactions
