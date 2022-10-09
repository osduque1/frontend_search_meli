import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./containers/AppProvider/AppProvider";
import "../src/assets/stylesheets/reset.scss";

/* istanbul ignore next */
if (process.env.NODE_ENV === "production") {
  const warningTitleCSS =
    "color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px psblack;";
  const warningDescCSS = "font-size: 18px;";

  // eslint-disable-next-line no-console
  console.log("%c¡Detente!", warningTitleCSS);
  // eslint-disable-next-line no-console
  console.log(
    "%cEsta función del navegador está pensada para desarrolladores.",
    warningDescCSS
  );
}

ReactDOM.render(<AppProvider />, document.getElementById("root"));
