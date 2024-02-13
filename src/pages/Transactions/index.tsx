import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading"
import TransactionsList from "../../components/TransactionsList"
import { TransactionSummary, TransactionsData } from "../../types/TransactionsApiReponse";
import TransactionApiService from "../../api/TransactionService";
import SummaryCards from "../../components/SummaryCards";
import { Button, Modal } from "react-bootstrap";
import TransactionForm from "../../components/TransactionForm";

const Transactions = () => {
  const [transactionsData, setTransactionsData] = useState<TransactionsData[]>([]);
  const [summaryData, setSummaryData] = useState<TransactionSummary>({
    receipt: {
      categories: [],
      total: 0,
    },
    expense: {
      categories: [],
      total: 0
    },
    balance: 0,
  });
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleCloseModalForm = () => {
    setShowModalForm(false);
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
  }
  const handleShowModalForm = () => setShowModalForm(true);

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
  }, [showModalForm]);

  const handleSubmitForm = (success: boolean): void => {
    setShowModalForm(false);
    if (success) {
      setShowSuccessMessage(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      <PageHeading title={'Transações'} />
      <div className="mb-3">
        <Button variant="outline-dark" onClick={handleShowModalForm}>
          + Transação
        </Button>
      </div>
      {/* Exibição da mensagem de sucesso ou erro */}
      {showSuccessMessage && <p style={{ color: 'green' }}>Transação criada com sucesso!</p>}
      {showErrorMessage && <p style={{ color: 'red' }}>Erro ao criar transação. Por favor, tente novamente mais tarde.</p>}
      
      <SummaryCards data={summaryData} />
      <TransactionsList data={transactionsData} />

      <Modal show={showModalForm} onHide={handleCloseModalForm}>
        <Modal.Header closeButton>
          <Modal.Title>Nova transação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm onSubmit={handleSubmitForm}/>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Transactions
