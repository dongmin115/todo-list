import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/worker";
import { BrowserRouter } from "react-router-dom"

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);