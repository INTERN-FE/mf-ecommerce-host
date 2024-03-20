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
