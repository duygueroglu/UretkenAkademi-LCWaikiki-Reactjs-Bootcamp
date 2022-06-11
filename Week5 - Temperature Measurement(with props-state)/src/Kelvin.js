import React, {Component} from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h4>Kelvin: {this.props.temp} K</h4>
      </div>
    );
  }
}