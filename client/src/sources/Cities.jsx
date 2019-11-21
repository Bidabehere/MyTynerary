import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pie from "./Pie";
import Union from "./components/Union";
import axios from "axios";
import { connect } from "react-redux";

class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
      ciudades: []
    };
    var contar = this.state.ciudades.length;
  }

  componentDidMount = async () => {
    let res = await axios.get("http://localhost:3012/");
    let data = res.data;
    console.log(data);
    this.setState({ ciudades: data });
  };

  render() {
    return (
      <div>
        <Union ciudad={this.props.test.ciudad} />
        <h1>Cities</h1>
        <div>
          {" "}
          {this.state.ciudades.length === 0 ? (
            <div>Loading...</div>
          ) : (
            this.state.ciudades.map((e, i) => {
              return (
                <div key={i}>
                  {e.city} {e.country}
                </div>
              );
            })
          )}
        </div>
        
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(mapStateToProps)(Cities);
