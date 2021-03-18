import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Products from './productPage'
import Charts from './charts'

export default function App() {
  const name = 'John Doe'
  return (
    <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/contact">Charts</a></li>
        </ul>
        </nav>
       
    <Route path="/" exact component={Products} />
    <Route path="/contact"  component={Charts} />
     </main>
     </Router>
    
  );
}
