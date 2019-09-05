import React, { Component } from "react";
import "../footer.scss";
export default class Footer extends Component {
  render() {
    const houses = this.props.state.houses;
    const state = this.props.state;
    const score = event => {
      console.log(event.target.id);
      const point = this.props.state.houses.find(
        house => house.id == event.target.id
      );
      console.log(point);
      // console.log(point.count)
      // point.count++;
      // console.log(point.count)
    };
    return (
      <div className="footer">
        {houses.map(house => (
          <div
            className="house"
            id={house.id}
            key={house.id}
            onClick={e => score(e)}
          >
            <div>{house.house}</div>
            <br />
            <div>{house.count}</div>
          </div>
        ))}
      </div>
    );
  }
}
