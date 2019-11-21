import React from "react";
import styles1 from "./styles1.module.css";

import logo from "../images/homeIcon.png";
var jua = "lios";
class Cabeza extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles1.centrar}>
        <img src={logo} alt="" className={styles1.pie} />
      </div>
    );
  }
}
export default Cabeza;
