import React, { Component } from "react";

import Coach from "../components/Coach";
import { trainersData } from "../assets/data/trainersData";
import NavBarXs from "../components/NavBarXs";

export default class Trainers extends Component {
  state = {
    coach: trainersData,
  };
  render() {
    let { coach } = this.state;

    return (
      <>
        <div className="coachs">
          <div className="trainers">
            {coach.map((item) => {
              return <Coach key={item.id} item={item} />;
            })}
          </div>
          <NavBarXs />
        </div>
      </>
    );
  }
}
