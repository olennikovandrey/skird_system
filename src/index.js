import App from "./App";
import reducer from "./store/reducer";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import { Provider } from "react-redux";
import { createStore } from "redux";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
