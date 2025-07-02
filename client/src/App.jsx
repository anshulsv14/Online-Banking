import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import AddMoney from './Pages/DashboardPages/AddMoney'
import AccInfo from './pages/dashboardPages/AccInfo'
import Statement from './Pages/DashboardPages/Statement'
import ResetPassword from './Pages/DashboardPages/ResetPass'
import ShowBalance from './Pages/DashboardPages/ShowBalance'
import MiniStatement from './Pages/DashboardPages/MiniStatement'
import WithdrawMoney from './Pages/DashboardPages/WithdrawMoney'
import About from './pages/About'



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login />}/>
          <Route index element={<Login />}/>
          <Route path='registration' element={<Registration />}/>
        </Route>
      </Routes>

      <Routes>

        <Route path='dashboard' element={<Dashboard />}>
          <Route path='addmoney' element={<AddMoney/>}/>
          <Route path='accountInfo' element={<AccInfo/>}/>
          <Route index element={<AccInfo/>}/>
          <Route path='statement' element ={<Statement />}/>
          <Route path='withdrawmoney' element ={<WithdrawMoney/>}/>
          <Route path='resetpass' element ={<ResetPassword />}/>
          <Route path='showbalance' element ={<ShowBalance />}/>
          <Route path='ministatement' element ={<MiniStatement />}/>

        </Route>
      </Routes>
      </BrowserRouter>

      
        <ToastContainer />

    </>
  )
}

export default App