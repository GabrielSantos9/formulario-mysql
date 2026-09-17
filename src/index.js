import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./rotas/Home";
import Usuarios from "./rotas/Usuarios";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  border: none;
  color: white;
  background-color: #101010;
  font-family: 'Montserrat', sans-serif;

   /* Barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
    display: flex;
    height: 10px;
  }

  /* Fundo da barra */
  ::-webkit-scrollbar-track {
    background: #101010;
  }

  /* Parte que você arrasta */
  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 10px;
  }

  /* Quando passa o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #FFF;
  }
}

* {
  box-sizing: border-box;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
