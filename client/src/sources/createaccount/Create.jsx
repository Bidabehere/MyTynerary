import React from "react";
import { Link } from "react-router-dom";
import Pie from "../Pie";
import Calesita from "../components/Calesita";

class Singup extends React.Component {
  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <Link to="/">
          < Pie />
        </Link>
        <Calesita />

      </div>
    );
  }
}

export default Singup;
