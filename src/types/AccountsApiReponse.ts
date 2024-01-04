import BankApiResponse from "./BanksApiReponse";
import SimpleUserApiResponse from "./SimpleUserApiReponse";

type AccountApiResponse = {
  id: number;
  name: string;
  agency: string;
  number: string;
  type: string;
  user?: SimpleUserApiResponse;
  bank?: BankApiResponse;
}

export default AccountApiResponse