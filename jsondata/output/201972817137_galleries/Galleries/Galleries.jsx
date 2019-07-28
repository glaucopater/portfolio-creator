import React, { Component } from "react";

import Images from "./Images/Images";
import Relations from "./Relations/Relations";

export default class Galleries extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Galleries">
        <span className="Name">{this.props.name}</span>
        <Images {...props.images} />
        <Relations {...props.relations} />
        {Object.values(this.props).map((p, index) => (
          <div key={index}>{p}</div>
        ))}
      </div>
    );
  }
}
