import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Button } from "./components/Button";

const App = () => (
  <div className="container">
    <Button onClick={() => console.log("test")} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
