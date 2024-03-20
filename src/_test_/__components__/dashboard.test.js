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
