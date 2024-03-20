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
