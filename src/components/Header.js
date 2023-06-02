import React from "react";

import burger from "../assets/burger.png";
import closeBurger from "../assets/close.png";

const Header = () => {
  const [show, isShow] = React.useState(true);
  const showClick = () => {
    isShow(!show);
  };
  return (
    <div>
      <div className="bg-gray-900 px-5 py-3 flex justify-between items-center">
        <h1 className="text-white font-normal text-2xl cursor-pointer">
          PORTFOLIO
        </h1>
        {show ? (
          <img
            onClick={() => {
              showClick();
            }}
            className="w-6 due invert"
            src={burger}
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              showClick();
            }}
            className="h-4 w-4 invert"
            src={closeBurger}
            alt=""
          />
        )}
      </div>
      <hr className="border-t-white" />
      {show ? null : (
        <div className="bg-gray-900 text-center shadow-md shadow-black">
          <ul>
            <li className="py-5 text-white">
              <a className="text-xl" href="#">
                Skills
              </a>
            </li>
            <li className="py-5 text-white">
              <a className="text-xl" href="#">
                About
              </a>
            </li>
            <li className="py-5 text-white">
              <a className="text-xl" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
