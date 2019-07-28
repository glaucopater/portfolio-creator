import React, { Component } from "react";

import Exif from "./Exif/Exif";

export default class Images extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Images">
        <span className="Filename">{this.props.filename}</span>
        <span className="Title">{this.props.title}</span>
        <span className="Size">{this.props.size}</span>
        <span className="Datetime">{this.props.datetime}</span>
        <Exif {...props.exif} />
        {Object.values(this.props).map((p, index) => (
          <div key={index}>{p}</div>
        ))}
      </div>
    );
  }
}
