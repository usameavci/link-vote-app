import React from "react";
import { Link } from "react-router-dom";

import LogoUrl from "../../../assets/images/logo.jpg";

import "./logo.css";

const Logo = () => {
  return (
    <Link data-testid="common-logo" to="/">
      <img src={LogoUrl} alt="Hepsiburada" className="common-logo" />
    </Link>
  );
};

export default Logo;
