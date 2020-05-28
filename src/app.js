import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "../src/routers/AppRouter";

const store = createStore(reducer);

//renders root class
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
