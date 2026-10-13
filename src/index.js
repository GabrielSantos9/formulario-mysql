import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./rotas/Home";
import Usuarios from "./rotas/Usuarios";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./components/ThemeProvider/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.fontColors.mainColor};
    background-color: #101010;
    font-family: 'Montserrat', sans-serif;
}

* {
  box-sizing: border-box;
  scrollbar-width: auto;
  scrollbar-color: #d9d9d9 #333;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
