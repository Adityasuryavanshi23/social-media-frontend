import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={<p>...loading</p>} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </Router>
);
