import React, { createContext, useState, ReactNode } from 'react';
import UserContextProps from '../types/userContext';

export const UserContext = createContext<UserContextProps>({
  username: '',
  accessToken: '',
  refreshToken: '',
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