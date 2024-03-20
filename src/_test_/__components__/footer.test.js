import React from "react";
import { render } from "@testing-library/react";

import FooterLayout from "../../components/footer-layout";

describe("FooterLayout Component", () => {
  test("renders copyright text correctly", () => {
    const { getByText } = render(<FooterLayout />);
    expect(
      getByText("2024 Copyright eCommerce. All Rights Reserved.")
    ).toBeInTheDocument();
  });
});
