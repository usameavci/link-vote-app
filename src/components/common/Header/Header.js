import React from "react";

import CommonLogo from "../Logo/Logo";
import CommonHeaderText from "../HeaderText/HeaderText";

import "./header.css";

const Header = () => {
  return (
    <div className="common-header">
      <CommonLogo />
      <CommonHeaderText />
    </div>
  );
};

export default Header;
