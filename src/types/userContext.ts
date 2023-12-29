type UserContextProps = {
  username: string;
  accessToken: string;
  refreshToken: string;
  setUsername?: (value: string) => void;
  setAccessToken?: (value: string) => void;
  setRefreshToken?: (value: string) => void;
};

export default UserContextProps;