/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 11:32:00 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavLayout from "../../components/nav-layout";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Categories", link: "/categories" },
  { name: "Rewards", link: "/rewards" },
];

describe("NavLayout Component", () => {
  const url = ["/"];
  test("renders navigation items correctly", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={url}>
        <NavLayout />
      </MemoryRouter>
    );
    NAV_ITEMS.forEach((item) => {
      const linkElement = getByText(item.name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
