import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./main.css";

import { Provider } from "react-redux";
import store from "./store";

import { CookiesProvider } from "react-cookie";

import { Provider as AlertProvider } from "react-alert";
import AlertTempate from "react-alert-template-basic";

// Altert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <AlertProvider template={AlertTempate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
