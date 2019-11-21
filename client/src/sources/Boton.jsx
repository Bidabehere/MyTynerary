import React from "react";
import styles1 from "./styles1.module.css";
import logo from "../images/circled-right-2.png";

class Cabeza extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles1.centrar}>
        <img src={logo} alt="" style={{ eigth: "80px", width: "80px" }} />
      </div>
    );
  }
}
export default Cabeza;
