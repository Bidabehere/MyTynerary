import React from "react";
import styles1 from "./styles1.module.css";

import logo from "../images/MYtineraryLogo.png";

class Cabeza extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles1.centrar}>
        <img src={logo} alt="" style={{ eigth: "100px", width: "200px" }} />
        <p>{this.props.fecha.toLocaleString()}</p>
      </div>
    );
  }
}
export default Cabeza;
