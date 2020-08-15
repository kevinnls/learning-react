import React from "react";
import "./App.css";
import { Clock, ClockAuto, ClockOnDemand } from "./Clocks";
import VisualModeToggle from "./VisualModeToggle";

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <VisualModeToggle />
        <Clock />
        <ClockAuto />
        <ClockOnDemand />
      </div>
    );
  }
}

export default App;
