/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 12:19:25 pm
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { renderHook } from "@testing-library/react-hooks";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../utils/useAuthentication.hook";
import usePrivateRoute from "../../utils/usePrivateRoute.hook";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../utils/useAuthentication.hook", () => jest.fn());

describe("usePrivateRoute", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test('navigates to "/" when user is not authenticated', () => {
    useAuthentication.mockReturnValue(false); // Mock useAuthentication to return false
    const navigate = jest.fn(); // Mock navigate function
    useNavigate.mockReturnValue(navigate); // Mock useNavigate hook to return navigate function

    // Render the hook
    renderHook(() => usePrivateRoute());

    // Expect navigate to be called with "/"
    expect(navigate).toHaveBeenCalledWith("/");
  });

  test("does not navigate when user is authenticated", () => {
    useAuthentication.mockReturnValue(true); // Mock useAuthentication to return true
    const navigate = jest.fn(); // Mock navigate function
    useNavigate.mockReturnValue(navigate); // Mock useNavigate hook to return navigate function

    // Render the hook
    renderHook(() => usePrivateRoute());

    // Expect navigate not to be called
    expect(navigate).not.toHaveBeenCalled();
  });
});
