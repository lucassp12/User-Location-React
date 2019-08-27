import React, { Fragment } from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./pages/Main";

import store from "./store/index";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
      <Main />
    </Fragment>
  </Provider>
);

export default App;
