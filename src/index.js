import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./context/global";

async function enableData() {
  if (process.env.NODE_ENV == "development") {
    const { worker } = await import("./data/setUpWorker");
    return worker.start();
  }

  return Promise.resolve();
}

enableData().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
});

