import React, { StrictMode } from "react";
// import App from "./ReactRouterDom/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./i2Challenge/App";

// import App from "./ReactRouterDom/App";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
