import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchFormProvider } from "./SearchFormContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchFormProvider>
      <App />
    </SearchFormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
