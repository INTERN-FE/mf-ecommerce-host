/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Wednesday, March 20th 2024, 10:32:54 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { MemoryRouter } from "react-router-dom";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import MainPage from "../../pages/main-page";

configure({ adapter: new Adapter() });

jest.mock(
  "mf_list_product/ListProduct",
  () => ({
    ListProduct: () => "ListProduct",
  }),
  { virtual: true }
);

jest.mock(
  "mf_list_product/DetailProduct",
  () => ({
    DetailProduct: () => "DetailProduct",
  }),
  { virtual: true }
);

describe("eCommerce Detail Product", () => {
  it("It should render Detail Product", () => {
    const url = ["/detail/1"];
    const components = (
      <MemoryRouter initialEntries={url}>
        <MainPage />
      </MemoryRouter>
    );

    const wrapper = shallow(components);
    expect(wrapper).toMatchSnapshot();
  });
});
