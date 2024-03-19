import PropTypes from "prop-types";
import NavLayout from "./nav-layout";
import FooterLayout from "./footer-layout";

function BaseLayout({ children }) {
  return (
    <div className="z-10">
      <NavLayout />
      <div className=" min-h-screen">{children}</div>
      <FooterLayout />
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
