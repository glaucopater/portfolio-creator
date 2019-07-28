import React from "react";
import "./App.css";
import Galleries from "./Galleries/Galleries";

const App = props => {
  return (
    <div className="App">
      <Galleries {...props.galleries} />
    </div>
  );
};
export default App;
