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
 *
 */

import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "react-simple-loading";

// Remote Components
const ListProduct = lazy(() => import("mf_list_product/ListProduct"));

// Host Components
import NoService from "../components/no-service";

const MainPage = () => {
  return (
    <ErrorBoundary fallback={<NoService serviceName="mf_list_product" />}>
      <Suspense
        fallback={
          <div className="h-screen">
            <Loading />
          </div>
        }
      >
        <ListProduct />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
