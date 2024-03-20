/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Tuesday, March 19th 2024, 9:34:05 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import { NAV_ITEMS } from "../constants/nav-items";

function NavLayout() {
  const cookies = new Cookies();

  return (
    <nav className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-3xl fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 px-[24px]">
        <Link className="flex-grow" to="/">
          <div className="flex items-center">
            <span className="ml-3 self-center text-2xl font-semibold whitespace-nowrap text-primary leading-none">
              <svg
                width="41"
                height="51"
                viewBox="0 0 41 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.1075 12.5315C38.0629 12.0033 37.618 11.5986 37.0878 11.6038H29.3384V8.6671C29.3384 3.88028 25.4578 0 20.6713 0C15.8845 0 12.0042 3.88028 12.0042 8.6671V11.6038H4.25483C3.72708 11.6058 3.28655 12.0065 3.23517 12.5315L0.563745 43.2439C0.442263 44.6678 0.923414 46.0778 1.8909 47.1306C2.85798 48.1829 4.22217 48.7815 5.65168 48.7803H35.701C37.1305 48.7815 38.4947 48.1829 39.4617 47.1306C40.4292 46.0778 40.9108 44.6678 40.7893 43.2439L38.1075 12.5315ZM14.0436 8.6671C14.0436 5.00669 17.0109 2.03932 20.6713 2.03932C24.3318 2.03932 27.2991 5.00669 27.2991 8.6671V11.6038H14.0436V8.6671ZM37.9546 45.752C37.3778 46.3869 36.5585 46.7466 35.701 46.741H5.64133C4.78378 46.7414 3.96566 46.3817 3.38573 45.75C2.8062 45.1179 2.51822 44.2715 2.59271 43.4172L5.18248 13.6431H12.0042V20.0056C10.3644 20.5103 9.34038 22.1382 9.59569 23.8349C9.85061 25.5313 11.3084 26.786 13.0239 26.786C14.7394 26.786 16.1968 25.5313 16.4521 23.8349C16.707 22.1382 15.683 20.5103 14.0436 20.0056V13.6328H27.2991V20.0056C25.6593 20.5103 24.6353 22.1382 24.8906 23.8349C25.1455 25.5313 26.6033 26.786 28.3188 26.786C30.0343 26.786 31.4917 25.5313 31.747 23.8349C32.0019 22.1382 30.9779 20.5103 29.3384 20.0056V13.6328H36.1498L38.7396 43.4068C38.8233 44.2648 38.5377 45.1175 37.9546 45.752ZM12.8709 21.9024C12.9725 21.9159 13.0753 21.9159 13.1768 21.9024C13.9308 21.9836 14.4901 22.6408 14.4494 23.398C14.4084 24.1556 13.7823 24.749 13.0239 24.749C12.2651 24.749 11.639 24.1556 11.5984 23.398C11.5577 22.6408 12.1166 21.9836 12.8709 21.9024ZM28.1658 21.9024C28.2674 21.9159 28.3702 21.9159 28.4717 21.9024C29.2257 21.9836 29.7849 22.6408 29.7443 23.398C29.7033 24.1556 29.0771 24.749 28.3188 24.749C27.56 24.749 26.9339 24.1556 26.8932 23.398C26.8526 22.6408 27.4114 21.9836 28.1658 21.9024Z"
                  fill="black"
                />
                <path
                  d="M25.1085 38.3477C25.1085 38.9717 24.9585 39.5537 24.6585 40.0937C24.3585 40.6217 23.9025 41.0477 23.2905 41.3717C22.6785 41.6957 21.9285 41.8577 21.0405 41.8577C20.1765 41.8577 19.4025 41.7077 18.7185 41.4077C18.0345 41.0957 17.4885 40.6637 17.0805 40.1117C16.6725 39.5597 16.4385 38.9237 16.3785 38.2037H18.5745C18.6345 38.7557 18.8685 39.2297 19.2765 39.6257C19.6965 40.0217 20.2545 40.2197 20.9505 40.2197C21.5745 40.2197 22.0545 40.0517 22.3905 39.7157C22.7385 39.3797 22.9125 38.9477 22.9125 38.4197C22.9125 37.9637 22.7865 37.5917 22.5345 37.3037C22.2825 37.0037 21.9705 36.7697 21.5985 36.6017C21.2265 36.4337 20.7165 36.2417 20.0685 36.0257C19.2765 35.7737 18.6285 35.5217 18.1245 35.2697C17.6325 35.0177 17.2125 34.6517 16.8645 34.1717C16.5165 33.6917 16.3425 33.0617 16.3425 32.2817C16.3425 31.5977 16.5105 30.9977 16.8465 30.4817C17.1825 29.9657 17.6625 29.5697 18.2865 29.2937C18.9105 29.0057 19.6305 28.8617 20.4465 28.8617C21.7425 28.8617 22.7685 29.1737 23.5245 29.7977C24.2925 30.4217 24.7305 31.2377 24.8385 32.2457H22.6245C22.5405 31.7657 22.3125 31.3577 21.9405 31.0217C21.5805 30.6737 21.0825 30.4997 20.4465 30.4997C19.8705 30.4997 19.4085 30.6497 19.0605 30.9497C18.7125 31.2377 18.5385 31.6577 18.5385 32.2097C18.5385 32.6417 18.6585 33.0017 18.8985 33.2897C19.1385 33.5657 19.4385 33.7877 19.7985 33.9557C20.1705 34.1117 20.6745 34.2977 21.3105 34.5137C22.1145 34.7657 22.7685 35.0237 23.2725 35.2877C23.7885 35.5397 24.2205 35.9117 24.5685 36.4037C24.9285 36.8957 25.1085 37.5437 25.1085 38.3477Z"
                  fill="#29A867"
                />
              </svg>
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
