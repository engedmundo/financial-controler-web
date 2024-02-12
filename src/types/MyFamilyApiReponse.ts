import SimpleUserApiResponse from "./SimpleUserApiReponse";

export type MyFamilyApiResponse = {
  id: number;
  name: string;
  members: SimpleUserApiResponse[];
}
