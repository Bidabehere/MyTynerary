import React, { Component } from "react";
import styles1 from "./styles1.module.css";
import Cabeza from "./Cabeza";
import Boton from "./Boton";
import Cuerpo from "./Cuerpo";
import Union from "./components/Union";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Pie from "./Pie";
import { connect } from "react-redux";
import {updateFecha} from '../redux/actions/testActions';

class Lpage extends React.Component {
  constructor(props) {
    super(props);
    
  }
/*   componentDidMount(){
    //setInterval(this.props.updateFecha(), 10000);
    this.props.updateFecha();
  } */
  componentDidMount(){

    //setInterval(this.props.updateFecha(), 1000);
    this.props.updateFecha();


  }

  state = {
    ciudadades: []
  };
  render() {
    return (
      <div>
        <Cabeza fecha={this.props.test.fecha} />
        <Cuerpo />
        <Link to="/Cities">
          <Boton />
        </Link>
        <p className={styles1.inicio}>Want to build your own MYtinerary?</p>

        <Link to="/ ">
          <Pie />
        </Link>
        <Union />
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(mapStateToProps, {
  updateFecha
})(Lpage);
