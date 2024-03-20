/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 12:11:55 pm
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { act, renderHook } from "@testing-library/react-hooks";

import useAuthentication from "../../utils/useAuthentication.hook";

jest.mock("universal-cookie", () => {
  return jest.fn().mockImplementation(() => {
    return {
      get: jest.fn(),
    };
  });
});

describe("useAuthentication", () => {
  test("returns undefined when access token is not present", async () => {
    await act(async () => {
      const { result } = renderHook(() => useAuthentication());
      expect(result.current).toBe(undefined);
    });
  });
});
