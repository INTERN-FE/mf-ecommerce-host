import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth/auth-page";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        {/* {!useAuthentication && ( */}
        <Route path="auth" element={<AuthPage />} />
        {/* )} */}
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
