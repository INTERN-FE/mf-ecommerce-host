/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 12:21:41 pm
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";

import { useCart } from "../../utils/useCart";

describe("useCart", () => {
  test("adds a product to the cart", () => {
    const { result } = renderHook(() => useCart());
    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: "ADD", payload: { id: 1, name: "Product A" } });
    });

    expect(result.current.state.products).toEqual([
      { id: 1, name: "Product A", qty: 1 },
    ]);
  });

  test("decreases the quantity of a product in the cart", () => {
    const { result } = renderHook(() => useCart());
    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: "ADD", payload: { id: 1, name: "Product A" } });
      dispatch({ type: "ADD", payload: { id: 2, name: "Product B" } });
      dispatch({ type: "DECREASE", payload: 1 });
    });

    expect(result.current.state.products).toEqual([
      { id: 2, name: "Product B", qty: 1 },
    ]);
  });

  test("removes a product from the cart", () => {
    const { result } = renderHook(() => useCart());
    const { dispatch } = result.current;

    act(() => {
      dispatch({ type: "ADD", payload: { id: 1, name: "Product A" } });
      dispatch({ type: "ADD", payload: { id: 2, name: "Product B" } });
      dispatch({ type: "REMOVE", payload: 1 });
    });

    expect(result.current.state.products).toEqual([
      { id: 2, name: "Product B", qty: 1 },
    ]);
  });
});
