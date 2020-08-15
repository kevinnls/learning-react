import React from "react";
import "./VisualModeToggle.css";

class VisualModeToggle extends React.Component {
  render() {
    return (
      <div id="visual-mode-toggle">
            <div className="toggle-track">
                <div className="toggle-ball"></div>
        </div>
      </div>
    );
  }
}

export default VisualModeToggle;
