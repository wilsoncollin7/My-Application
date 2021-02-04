import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "./pages/Home";
import Login from "./pages/Login";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
