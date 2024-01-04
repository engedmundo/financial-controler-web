import AccountApiResponse from "./AccountsApiReponse";
import CategoryApiResponse from "./CategoryApiReponse";
import CreditCardApiResponse from "./CreditCardsApiReponse";
import SimpleUserApiResponse from "./SimpleUserApiReponse";

export type TransactionsApiResponse = {
  transactions: TransactionsData[];
  summary: TransactionSummary;
}

export type TransactionsData = {
  id: number;
  user: SimpleUserApiResponse;
  account: AccountApiResponse;
  credit_card: CreditCardApiResponse;
  category: CategoryApiResponse;
  amount: string;
  date: string;
  type: string;
  description: string;
}

export type TransactionSummary = {
  receipt: number;
  expense: number;
  balance: number;
}
