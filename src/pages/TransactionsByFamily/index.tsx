import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading"
import TransactionsList from "../../components/TransactionsList"
import { TransactionSummary, TransactionsData } from "../../types/TransactionsApiReponse";
import TransactionApiService from "../../api/TransactionService";
import FamilyApiService from "../../api/FamilyService";
import SummaryCards from "../../components/SummaryCards";
import { MyFamilyApiResponse } from "../../types/MyFamilyApiReponse";
// import { Button } from "react-bootstrap";
// import { Form } from "react-router-dom";

const TransactionsByFamily = () => {
  const [myFamily, setMyFamily] = useState<MyFamilyApiResponse>({
    id: 0,
    name: '',
    members: [],
  });
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

  const fetchTransactionsData = async () => {
    try {
      const response = await TransactionApiService.listTransactionsByFamily(myFamily.id);
      setTransactionsData(response.transactions);
      setSummaryData(response.summary)
      return
    } catch (error) {
      console.error("Error fetching transactions data:", error);
    }
  }

  const fetchMyFamily = async () => {
    try {
      const response = await FamilyApiService.getMyFamily();
      setMyFamily(response);
      return
    } catch (error) {
      console.error("Error fetching my family data:", error);
    }
  }

  useEffect(() => {
    fetchMyFamily();
  }, []);

  useEffect(() => {
    if (myFamily.id !== 0) {
      fetchTransactionsData();
    }
  }, [myFamily]);

  return (
    <div>
      <PageHeading title={'Transações por família'} />
        <p>{myFamily.name}</p>
        <p>{myFamily.members.map((member) => member.first_name).join(' & ')}</p>
      
      
      <SummaryCards data={summaryData} />
      <TransactionsList data={transactionsData} />
    </div>
  )
}

export default TransactionsByFamily
