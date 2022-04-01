import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchFormContext } from "./SearchFormContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchFormContext>
      <App />
    </SearchFormContext>
  </React.StrictMode>,
  document.getElementById("root")
);
