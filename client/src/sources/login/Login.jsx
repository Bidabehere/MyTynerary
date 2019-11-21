import React from "react";
import { Link } from "react-router-dom";
import Pie from "../Pie";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <Link to="/createaccount/Create"> Sing Up </Link>
        <Link to="/"> Home </Link>
        <Link to="/"> <Pie/></Link>
      </div>
    );
  }
}

export default Login;
