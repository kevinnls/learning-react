import React from "react"
import "./Clocks.css"

function getLocalTime() {
  return new Date().toLocaleTimeString();
}
const Clock = (props) => {
  return (
    <div className={`clock ${props.classes}`}>
      <h1>Hello World!</h1>
      <p>the time is {props.time}</p>
    </div>
  );
};

class ClockAuto extends React.Component {
  state = {
    time: getLocalTime(),
  };
  render() {
    return (
      <React.Fragment>
        <Clock time={this.state.time} />
      </React.Fragment>
    );
  }
  componentDidMount() {
    console.log("did mount");
    this.tick = setInterval(() => {
      this.setState({ time: getLocalTime() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tick);
  }
}

class ClockOnDemand extends React.Component {
  state = {
    time: getLocalTime(),
  };

  render() {
    return (
      <div>
        <Clock time={this.state.time} classes="onDemandClock" />
      </div>
    );
  }

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ time: getLocalTime() });
  };

  componentDidMount() {
    this.elementDiv = document.getElementsByClassName("onDemandClock");
    for (let inst of this.elementDiv) {
      inst.addEventListener(
        "click",
        () => {
          this.setState({ time: getLocalTime() });
        },
        false
      );
    }
  }
  componentWillUnmount() {
    for (let inst of this.elementDiv) inst.removeEventListener("click");
  }
}

export {Clock, ClockOnDemand, ClockAuto}