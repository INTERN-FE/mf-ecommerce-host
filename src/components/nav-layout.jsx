import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import Logo from "../static/svgs/logo.svg";
import { NAV_ITEMS } from "../constants/nav-items";

function NavLayout() {
  const cookies = new Cookies();

  return (
    <nav className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-3xl fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 px-[24px]">
        <Link className="flex-grow" to="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary leading-none">
              <Logo />
            </span>
          </div>
        </Link>

        <div className="flex md:order-2">
          {cookies.get("access-token") ? (
            <NavigationDropdown
              id="basic-menu"
              name={userProfileData.profile.name}
              email={userData.user.email}
            />
          ) : (
            <Link to="/auth">
              <button
                type="button"
                className="bg-primary text-white font-medium rounded-full text-sm px-8 py-2 mx-2 text-center mr-3"
              >
                Sign In
              </button>
            </Link>
          )}
        </div>

        <div
          className="items-center justify-between hidden w-full mr-6 md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 mr-4 font-mediu md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {NAV_ITEMS.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>
                    <div className={`block py-2 pl-3 pr-4 text-gray-900`}>
                      {item.name}
                    </div>
                  </Link>
                </li>
              );
            })}
            {cookies.get("ACCESS-TOKEN") && cookies.get("REFRESH-TOKEN") ? (
              <li>
                <Link to="/dashboard">
                  <div className={`block py-2 pl-3 pr-4 text-gray-900`}>
                    Dashboard
                  </div>
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLayout;
