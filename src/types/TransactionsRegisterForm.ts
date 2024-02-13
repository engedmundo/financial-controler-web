export type TransactionsRegisterForm = {
  account?: number;
  credit_card?: number;
  category: number;
  amount: number;
  date: string;
  type: 'receipt' | 'expense' | '';
  description: string;
}
