import React, { Component } from "react";
import "../Card.css";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <div className="card">{this.props.front}</div>
        ) : (
          <div className="card clicked">{this.props.back}</div>
        )}
      </div>
    );
  }
}
