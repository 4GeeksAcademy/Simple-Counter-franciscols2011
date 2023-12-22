//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let inicioContador = 0;

setInterval(function () {
  inicioContador++;
  ReactDOM.render(
    <SecondsCounter segundos={inicioContador} />,
    document.querySelector("#app")
  );
}, 1000);

//render your react application

ReactDOM.render(
  <SecondsCounter segundos={inicioContador} />,
  document.querySelector("#app")
);
