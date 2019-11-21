import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



/** imagenes */

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

/** */

class Calesita2 extends React.Component {
    render() {
        var settings = {
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (

            <div id="galeria">
                <Slider {...settings}>
                    <div>
                        <div class="columnaizq">
                            <div class="ciudad">
                                <img src={imagen1} width="200px" />
                            </div>
                            <div>
                                <h3>Barcelona</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen2} width="200px" />
                            </div>
                            <div>
                                <h3>Amsterdam</h3>
                            </div>
                        </div>
                        <div class="columnader">
                            <div class="ciudad">
                                <img src={imagen3} width="200px" />
                            </div>
                            <div>
                                <h3>New York</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen4} width="200px" />
                            </div>
                            <div>
                                <h3>Paris</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="columnaizq">
                            <div class="ciudad">
                                <img src={imagen5} width="200px" />
                            </div>
                            <div>
                                <h3>Buenos Aires</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen6} width="200px" />
                            </div>
                            <div>
                                <h3>Tokyo</h3>
                            </div>
                        </div>
                        <div class="columnader">
                            <div class="ciudad">
                                <img src={imagen7} width="200px" />
                            </div>
                            <div>
                                <h3>Moscow</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen8} width="200px" />
                            </div>
                            <div>
                                <h3>Sofia</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="columnaizq">
                            <div class="ciudad">
                                <img src={imagen9} width="200px" />
                            </div>
                            <div>
                                <h3>Liverpool</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen10} width="200px" />
                            </div>
                            <div>
                                <h3>Caracas</h3>
                            </div>
                        </div>
                        <div class="columnader">
                            <div class="ciudad">
                                <img src={imagen11} width="200px" />
                            </div>
                            <div>
                                <h3>Madrid</h3>
                            </div>
                            <div class="ciudad">
                                <img src={imagen12} width="200px" />
                            </div>
                            <div>
                                <h3>Sydney</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        );
    }
}

export default Calesita2



