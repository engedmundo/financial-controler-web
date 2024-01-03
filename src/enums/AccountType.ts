enum AccountTypeEnum {
  Current = 'current',
  Saving = 'saving',
  Investment = 'investment',
}

export function getAccountType(type: string): string {
  switch (type) {
    case AccountTypeEnum.Current:
      return "Conta Corrente";
    case AccountTypeEnum.Saving:
      return "Poupança";
    case AccountTypeEnum.Investment:
      return "Investimento";
    default:
      return "";
  }
}