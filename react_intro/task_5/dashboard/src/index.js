import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import Notifications from "./Notifications/Notifications"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <Notifications />
  </React.StrictMode>
);
