import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./containers/AppProvider/AppProvider";
import "../src/assets/stylesheets/reset.scss";

/* istanbul ignore next */
if (process.env.NODE_ENV === "production") {
  const warningDescCSS = "font-size: 18px;";

  // eslint-disable-next-line no-console
  console.log(
    "%cEsta función del navegador está pensada para desarrolladores.",
    warningDescCSS
  );
}

ReactDOM.render(<AppProvider />, document.getElementById("root"));
