import React, { Component } from "react";

export default class Relations extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="Relations">
        {Object.values(this.props).map((p, index) => (
          <div key={index}>{p}</div>
        ))}
      </div>
    );
  }
}
