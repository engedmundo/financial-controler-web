import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Banks from './pages/Banks';
import Accounts from './pages/Accounts';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        />
        <Route
          path='/banks'
          element={
            <PrivateRoute>
              <Banks/>
            </PrivateRoute>
          }
        />
        <Route
          path='/accounts'
          element={
            <PrivateRoute>
              <Accounts/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
