import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Lpage from "./sources/Lpage";
import Login from "./sources/login/Login";
import Singup from "./sources/Singup";
import Cuerpo from "./sources/Cuerpo";
import Pie from "./sources/Pie";
import Create from "./sources/createaccount/Create";
import Boton from "./sources/Boton";
import Cities from "./sources/Cities";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Lpage} />
        <Route path="/Login" component={Login} />
        <Route path="/Create" component={Create} />
        <Route path="/Cities" component={Cities} />
        <Route path="/" component={Pie} />
      </Switch>
    </Router>
  );
}

export default App;
