import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Banks from './pages/Banks';
import Accounts from './pages/Accounts';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainMenu } from './components/MainMenu';
import CreditCards from './pages/CreditCards';
import Transactions from './pages/Transactions';
import TransactionsByFamily from './pages/TransactionsByFamily';


function App() {

  return (
    <>
      <MainMenu />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/banks'
          element={
            <PrivateRoute>
              <Banks />
            </PrivateRoute>
          }
        />
        <Route
          path='/accounts'
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          }
        />
        <Route
          path='/credit-cards'
          element={
            <PrivateRoute>
              <CreditCards />
            </PrivateRoute>
          }
        />
        <Route
          path='/transactions'
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />
        <Route
          path='/transactions-by-family'
          element={
            <PrivateRoute>
              <TransactionsByFamily />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
