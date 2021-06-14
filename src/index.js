import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <React.StrictMode>
    <FavoriteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
