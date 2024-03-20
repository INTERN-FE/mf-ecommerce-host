/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 2:16:49 pm
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import React from "react";
import PropTypes from "prop-types";

function NoService({ serviceName }) {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-9xl font-black mb-3">404</h1>
      <h5 className="text-xl font-medium text-center">{`Service ${serviceName}, Not Available`}</h5>
    </div>
  );
}

NoService.propTypes = {
  serviceName: PropTypes.string.isRequired,
};

export default NoService;
