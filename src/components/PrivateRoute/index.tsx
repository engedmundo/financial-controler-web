import { FC, ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { username, accessToken, refreshToken } = useContext(UserContext);
  const isAuthenticated = username && accessToken && refreshToken;

  return (
    isAuthenticated ? <>{children}</> : <Navigate to='/login' />
  );
};

export default PrivateRoute;