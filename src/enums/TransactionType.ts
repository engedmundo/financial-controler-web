enum TransactionTypeEnum {
  Expense = 'expense',
  Receipt = 'receipt',
}

export function getTransactionType(type: string): string {
  switch (type) {
    case TransactionTypeEnum.Expense:
      return "Despesa";
    case TransactionTypeEnum.Receipt:
      return "Receita";
    default:
      return "";
  }
}