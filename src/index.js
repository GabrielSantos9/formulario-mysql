import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./rotas/Home";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  color: white;
  background-color: #101010;
  font-family: 'Montserrat', sans-serif;
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
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
