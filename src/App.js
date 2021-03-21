import React, { useState } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Products from './productPage';
import Charts from './charts';
import Login from'./login';
import useToken from './useToken';
require('dotenv').config();


export default function App() {

  const { token, setToken } = useToken();

  // function setToken(userToken) {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

  if(!token) {
    return <Login setToken={setToken} />
  }

  // const token = getToken();

  return (
    <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/contact">Charts</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        </nav>
       
    <Route path="/" exact component={Products} />
    <Route path="/contact"  component={Charts} />
    <Route path="/login"  component={Login} />
     </main>
     </Router>
    
  );
}
