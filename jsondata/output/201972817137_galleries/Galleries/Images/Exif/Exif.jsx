import React, { Component } from "react";

export default class Exif extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Exif">
        {Object.values(this.props).map((p, index) => (
          <div key={index}>{p}</div>
        ))}
      </div>
    );
  }
}
