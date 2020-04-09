import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";

// import reducers from "./reducers";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./components/App";

import { store, persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
