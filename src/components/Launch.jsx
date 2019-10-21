import React, { Component } from "react";

class Launch extends Component {
  getRocketData = (rocket_id, mission_name) => {
    this.props.setCurrentExpandedLaunch(
      this.props.currentExpandedLaunch === this.props.launch.mission_name
        ? null
        : mission_name
    );
  };

  render() {
    let { launch, currentExpandedLaunch } = this.props;

    return (
      <li>
        <h2
          onClick={() =>
            this.getRocketData(launch.rocket_id, launch.mission_name)
          }
        >
          {" "}
          {launch.mission_name}{" "}
        </h2>
        <div> Flight Number: {launch.flight_number} </div>
        {currentExpandedLaunch === launch.mission_name && (
          <div>
            <div> Flight Number: {launch.flight_number} </div>
            <div> Flight Number: {launch.flight_number} </div>
            <div> Flight Number: {launch.flight_number} </div>
          </div>
        )}
      </li>
    );
  }
}

export default Launch;
