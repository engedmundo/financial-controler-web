import BankApiResponse from "./BanksApiReponse";
import SimpleUserApiResponse from "./SimpleUserApiReponse";

type CreditCardApiResponse = {
  id: number;
  name: string;
  expense_limit: number;
  payment_day: number;
  user: SimpleUserApiResponse;
  bank: BankApiResponse;
}

export default CreditCardApiResponse