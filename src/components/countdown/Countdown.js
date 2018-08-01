import React, { Component } from "react";
import Dhms from "./Dhms";
import "./Countdown.css";

export class Countdown extends Component {
  state = {
    deadline: "October 10, 2018"
  };

  _submit(e) {
    e.preventDefault();

    let inputText = e.target.elements.inputvalue.value.trim();
    console.log(inputText);

    this.setState({
      deadline: inputText
    });

    // clear the input text
    e.target.elements.inputvalue.value = "";

    console.log(this.state);
  }

  render() {
    const { deadline } = this.state;

    return (
      <div className="countdown_app">
        <div className="deadline">Countdown to :- {deadline}</div>
        <Dhms deadline={deadline} />

        <form onSubmit={e => this._submit(e)}>
          <input type="text" name="inputvalue" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Countdown;
