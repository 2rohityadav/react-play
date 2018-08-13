import React, { Component } from "react";
import axios from "axios";

export class Reactaxios extends Component {
  componentDidMount = () => {
    const URL = "https://api.github.com/users";
    axios
      .get(`URL/rohyadav`)
      .then(res => res.json())
      .then(console.log(res));
  };

  render() {
    return <div />;
  }
}

export default Reactaxios;
