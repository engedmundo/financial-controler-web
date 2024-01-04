import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading"
import TransactionsList from "../../components/TransactionsList"
import { TransactionSummary, TransactionsData } from "../../types/TransactionsApiReponse";
import TransactionApiService from "../../api/TransactionService";
import SummaryCards from "../../components/SummaryCards";

const Transactions = () => {
  const [transactionsData, setTransactionsData] = useState<TransactionsData[]>([]);
  const [summaryData, setSummaryData] = useState<TransactionSummary>({
    receipt: 0,
    expense: 0,
    balance: 0,
  });

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
      <SummaryCards data={summaryData} />
      <TransactionsList data={transactionsData} />
    </div>
  )
}

export default Transactions
