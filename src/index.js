import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "playbook-ui/dist/playbook.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GraphProvider from "../src/components/GraphProvider/GraphProvider";

async function main() {
  if (process.env.NODE_ENV === "development") {
    if (window.location.pathname === "/public/") {
      window.location.pathname = "/public/";
      return;
    }
    const { worker } = require("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  }

  ReactDOM.render(
    <React.StrictMode>
      <GraphProvider>
        <App />
      </GraphProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

reportWebVitals();
main();
