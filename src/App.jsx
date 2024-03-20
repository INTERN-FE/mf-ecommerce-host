import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

// Remote Components
import DetailProduct from "mf_list_product/DetailProduct";
import Payment from "mf_payment_and_cart/Payment";

// Host Components
import "./index.scss";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth/auth-page";
import BaseLayout from "./components/base-layout";
import { useCart } from "./hooks/useCart";

const App = () => {
  const { state, dispatch } = useCart();

  const cartItem = state.products;

  return (
    <HashRouter>
      <BaseLayout>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route
              path="detail/:id"
              element={
                <DetailProduct dispatch={dispatch} cartItem={cartItem} />
              }
            />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BaseLayout>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
