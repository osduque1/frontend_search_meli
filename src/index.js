import React from "react";
import { createRoot } from "react-dom/client";
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
    "%cEsta función del navegador está pensada para desarrolladores. Si alguien te ha indicado que copiaras y pegaras algo aquí para 'hackear' la cuenta de alguien, se trata de un fraude. Si lo haces, esta persona podrá acceder a tu cuenta.",
    warningDescCSS
  );
}

createRoot(
  document.getElementById("root") || document.createElement("div")
).render(<AppProvider />);
