import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styles1 from "../styles1.module.css";
import imagen1 from "../images/city.jpg";
import imagen2 from "../images/city-de-londres.jpg";
import imagen3 from "../images/cripto-singapur.jpg";
import imagen4 from "../images/Cuenca.jpg";
import imagen5 from "../images/estados-unidos.jpg";
import imagen6 from "../images/guanajuato.jpg";
import imagen7 from "../images/hong.jpg";
import imagen8 from "../images/londres.jpg";
import imagen9 from "../images/new-york.jpg";
import imagen10 from "../images/nueva-york.jpg";
import imagen11 from "../images/the-tulip-.jpg";
import imagen12 from "../images/the-tulip1.jpg";

import logo from "./homeIcon.png";
//import logo from "../images/homeIcon.png";
class Calesita extends React.Component {
  render() {
    return (
      <div className={styles1.dime}>
        <Carousel>

          <Carousel.Item className="flex">

            <img className={styles1.tamaño2} src={imagen1} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen3} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen2} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen4} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="flex">

            <img className={styles1.tamaño2} src={imagen5} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen6} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen7} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen8} alt="Third slide" />


            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="flex">

            <img className={styles1.tamaño2} src={imagen9} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen10} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen11} alt="Third slide" />
            <img className={styles1.tamaño2} src={imagen12} alt="Third slide" />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    )
  }
}

export default Calesita; 