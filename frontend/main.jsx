import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const apps = {
  root: lazy(() => import("./App")),
  Second: lazy(() => import("./Second")),
};

const renderAppInElement = (el) => {
  if (apps[el.id]) {
    const App = apps[el.id];
    ReactDOM.createRoot(document.getElementById(el.id)).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

document.querySelectorAll(".__react-root").forEach(renderAppInElement);
