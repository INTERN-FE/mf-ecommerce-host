import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth/auth-page";
import BaseLayout from "./components/base-layout";

const App = () => {
  return (
    <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
        </Route>
      </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
