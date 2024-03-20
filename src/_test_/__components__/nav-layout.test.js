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
