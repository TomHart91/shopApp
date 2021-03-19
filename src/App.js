import React, { useState } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Products from './productPage';
import Charts from './charts';
import Login from'./login';

export default function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

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
