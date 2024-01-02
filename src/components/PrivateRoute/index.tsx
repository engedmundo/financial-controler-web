import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const username: string | null = sessionStorage.getItem('username');
  const accessToken: string | null = sessionStorage.getItem('accessToken');
  const refreshToken: string | null = sessionStorage.getItem('refreshToken');
  const isAuthenticated = username && accessToken && refreshToken;

  return (
    isAuthenticated ? <>{children}</> : <Navigate to='/login' />
  );
};

export default PrivateRoute;