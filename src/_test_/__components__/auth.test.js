/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 11:08:04 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { MemoryRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

import AuthPage from "../../pages/auth/auth-page";

jest.mock("../../static/images/login_illustration.png", () => ({
  default: "./__mocks__/login_illustration.png",
}));

describe("AuthPage Component", () => {
  const url = ["/auth"];
  test("Renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={url}>
        <AuthPage />
      </MemoryRouter>
    );
  });

  test("initial tab is login", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={url}>
        <AuthPage />
      </MemoryRouter>
    );
    expect(getByText("Sign In to My Account")).toBeInTheDocument();
  });

  test("toggles to signup form when clicking on Daftar", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={url}>
        <AuthPage />
      </MemoryRouter>
    );
    fireEvent.click(getByText("Daftar"));
    expect(
      getByText("Silahkan daftar menggunakan email dan password anda")
    ).toBeInTheDocument();
  });

  test("toggles back to login form when clicking on Masuk", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={url}>
        <AuthPage />
      </MemoryRouter>
    );
    fireEvent.click(getByText("Daftar"));
    fireEvent.click(getByText("Masuk"));
    expect(
      getByText("Silahkan login menggunakan email dan password anda")
    ).toBeInTheDocument();
  });
});
