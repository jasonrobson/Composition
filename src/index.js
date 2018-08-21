import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  funcComposta,
  somarCinco,
  multiplicarPorDois,
  saudar,
  bomDia
} from "./composition";

function App() {
  const somarCincoEMultiplicarPorDois = funcComposta(
    somarCinco,
    multiplicarPorDois
  );
  const saudarPeloNomeEDarBomDia = funcComposta(saudar, bomDia);
  return (
    <div className="App">
      <h1>Funcao Composta (Composition)</h1>
      <h2>Exemplo um</h2>
      <p>{somarCincoEMultiplicarPorDois(5)}</p>
      <h2>Exemplo dois</h2>
      <p>{saudarPeloNomeEDarBomDia("Gina")}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
