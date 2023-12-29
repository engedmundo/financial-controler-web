import { Routes, Route, Link, NavLink } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Banks from './pages/Banks';
import Accounts from './pages/Accounts';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';


function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/banks' element={<Banks />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </>
  )
}

export default App
