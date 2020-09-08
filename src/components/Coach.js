import React, { Component } from "react";

export default class Coach extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { name, picture } = this.props.item;

    return (
      <div className="card-trainer">
        <img className="card-img" src={picture} alt="" />
        <h3 className="card-name">{name}</h3>
      </div>
    );
  }
}
