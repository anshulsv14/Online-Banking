import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Dashboard.css";
import { Link,Outlet } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    } else {
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };

  return (
    <div className="dashboard-container">
  
      <div className="navbar1">
        <h2 className="navHead">People's Bank</h2>
        <div className="rightnav">
          <h1 className="welcomeLine"> Welcome: &nbsp;
           {localStorage.getItem("name")}😊
          </h1>

          <button onClick={logout} className="btn-logout">
          Logout
        </button>
      
        </div>
        </div>

      <div className="dashboard-main">

        <div className="sidebar">
          <ul>
            
            <Link to={"accountInfo"} className="link"><li>🏦 Account Info</li> </Link>
            <Link to={"showbalance"} className="link"><li>💵 Show Balance</li> </Link>
            <Link to={"statement"} className="link"><li>📜 Account Statement</li></Link>
            <Link to={"ministatement"} className="link"><li>📄 Mini Statement</li></Link>
            <Link to={"addmoney"} className="link"><li>💰 Add Money</li> </Link>
            <Link to={"withdrawmoney"} className="link"><li>💸 Withdraw Money</li></Link>
            <Link to={"resetpass"} className="link"><li>🔒 Reset Password</li></Link>
          </ul>
        </div>

        <div className="dashboard-content">
        <Outlet />

        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;