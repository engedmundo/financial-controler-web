import React, { createContext, useState, ReactNode } from 'react';
import UserContextProps from '../types/userContext';

const noop = () => { }
const sessionUsername = sessionStorage.getItem('username');
const sessionAccessToken = sessionStorage.getItem('accessToken');
const sessionRefreshToken = sessionStorage.getItem('RefreshToken');

export const UserContext = createContext<UserContextProps>({
  username: sessionUsername ? sessionUsername : '',
  accessToken: sessionAccessToken ? sessionAccessToken : '',
  refreshToken: sessionRefreshToken ? sessionRefreshToken : '',
  setUsername: noop,
  setAccessToken: noop,
  setRefreshToken: noop,
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');

  const contextValue = {
    username,
    setUsername,
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}