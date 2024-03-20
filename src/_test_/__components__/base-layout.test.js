/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 11:52:25 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import BaseLayout from "../../components/base-layout";

describe("BaseLayout Component", () => {
  const url = ["/"];

  const { getByText } = render(
    <MemoryRouter initialEntries={url}>
      <BaseLayout>Test Content</BaseLayout>
    </MemoryRouter>
  );

  test("renders children content", () => {
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
