import React, { Component } from "react";
import "../Houses.scss";
export default class Houses extends Component {
  render() {
    const houses = this.props.state.houses;
    // console.log(houses);
    return (
      <div className="Houses">
        {houses.map(house => (
          <div key={house.id}>{house.count}</div>
        ))}
      </div>
    );
  }
}
