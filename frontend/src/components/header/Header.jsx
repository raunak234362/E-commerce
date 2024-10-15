/* eslint-disable no-unused-vars */
import React from "react";
import {Navbar} from "../index";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-slate-100">
      <div className="flex justify-between px-4 py-3 max-xs:px-2">
        {/* LOGO */}
        <div>LOGO</div>
        <div>
          <Navbar />
        </div>
        <div>
          Button
        </div>
      </div>
    </div>
  );
};

export default Header;
