import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { useStateValue } from "./context/StateProvider";
import axios from "./db/axios";
import { actionTypes } from "./context/reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [{ masks }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/detail">
            <h1>Detail </h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
