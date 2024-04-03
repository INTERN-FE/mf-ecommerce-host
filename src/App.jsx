/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Tuesday, March 19th 2024, 11:57:18 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 * Author: Agustinus Wesly Sitanggang | agustchannel@gmail.com <https://github.com/agus-wesly>
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

// Remote Components
// const { DetailProduct } = lazy(() => import("mf_list_product/DetailProduct"));
// const Payment = lazy(() => import("mf_payment_and_cart/Payment"));
// import { DetailProduct } from "mf_list_product/DetailProduct";
// const Payment = React.lazy(() => import("mf_payment_and_cart/Payment"));
// const DetailProduct = React.lazy(() => import("mf_list_product/DetailProduct"));

// Host Components
import "./index.scss";
import MainPage from "./pages/main-page";
import AuthPage from "./pages/auth/auth-page";
import BaseLayout from "./components/base-layout";
import { useCart } from "./utils/useCart";
import LazyLoadedComponent from "./components/lazy-loaded";

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
                <LazyLoadedComponent
                  scope={"mf_list_product"}
                  url={"http://localhost:4251/remoteEntry.js"}
                  module={"./DetailProduct"}
                  Loader={() => <p>Loading...</p>}
                  dispatch={dispatch}
                  cartItem={cartItem}
                />
              }
            />
            <Route
              path="payment"
              element={
                <LazyLoadedComponent
                  scope={"mf_payment_and_cart"}
                  url={"http://localhost:4252/remoteEntry.js"}
                  module={"./Payment"}
                  Loader={() => <p>Loading...</p>}
                />
              }
            />
          </Route>
        </Routes>
      </BaseLayout>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
