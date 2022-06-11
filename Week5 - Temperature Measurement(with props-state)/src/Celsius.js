import React, {Component} from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.temp}</h4>
      </div>
    );
  }
}