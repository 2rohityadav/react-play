import React, { Component } from "react";

export class Dhms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount = () => {
    this._countDownBegin(this.props.deadline);
  };

  componentDidMount = () => {
    setInterval(() => {
      this._countDownBegin(this.props.deadline);
    }, 1000);
  };

  _countDownBegin(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  _leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <div className="days">{this._leading0(days)} Days</div>
        <div className="hours">{this._leading0(hours)} Hours</div>
        <div className="minutes">{this._leading0(minutes)} Minutes</div>
        <div className="seconds">{this._leading0(seconds)} Seconds</div>
      </div>
    );
  }
}

export default Dhms;
