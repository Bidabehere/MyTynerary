import React from "react";
import styles1 from "./styles1.module.css";

class Cuerpo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles1.centrar}>
        <p>
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
        <h3>Start browsing</h3>
      </div>
    );
  }
}
export default Cuerpo;
