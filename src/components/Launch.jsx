import React, { Component } from "react";
import { fetchRocketIfNeeded } from "../actions/Rockets";

class Launch extends Component {
  getRocketData = (rocket_id, mission_name) => {
    const requestOldRocketData =
      this.props.currentExpandedLaunch === this.props.launch.mission_name;
    const { dispatch, rocketCollection } = this.props;
    !requestOldRocketData &&
      fetchRocketIfNeeded({
        dispatch,
        rocketCollection,
        rocket_id
      });

    this.props.setCurrentExpandedLaunch(
      requestOldRocketData ? null : mission_name
    );
  };

  render() {
    let { launch, currentExpandedLaunch, rocketCollection } = this.props;
    const rocketData = rocketCollection.rockets[launch.rocket.rocket_id];
    return (
      <li>
        <h2
          className={"rocketData"}
          onClick={() =>
            this.getRocketData(launch.rocket.rocket_id, launch.mission_name)
          }
        >
          {" "}
          {launch.mission_name}{" "}
        </h2>
        <div> Flight Number: {launch.flight_number} </div>
        {currentExpandedLaunch === launch.mission_name && (
          <div>
            <div> Rocket ID: {rocketData.rocket_id} </div>
            <div> Cost Per Launch: {`$${rocketData.cost_per_launch}`} </div>
            <div> Description: {rocketData.description} </div>
          </div>
        )}
      </li>
    );
  }
}

export default Launch;
