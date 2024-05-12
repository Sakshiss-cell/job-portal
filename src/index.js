import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import "./styles/global.css";

const container = document.getElementById("root"); // Get the root container
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
