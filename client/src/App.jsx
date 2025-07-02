import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'

import About from './pages/About'
import Dashboard from './pages/Dashboard'
import AddMoney from './pages/dashboardPages/AddMoney'
import  AccInfo  from './pages/dashboardPages/AccInfo'
import Statement from './pages/dashboardPages/Statement'

import WithdrawMoney from './pages/dashboardPages/WithdrawMoney'
import ResetPassword from './pages/dashboardPages/ResetPass'
import ShowBalance from './pages/dashboardPages/ShowBalance'
import MiniStatement from './pages/dashboardPages/MiniStatement'




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