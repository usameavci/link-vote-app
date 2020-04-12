import React from "react";
import { Link } from "react-router-dom";

import "./submit.css";

const Submit = () => {
  return (
    <Link data-testid="link-submit" className="link-submit" to="/submit">
      <div className="link-submit-icon">
        <i className="fa fa-plus" />
      </div>
      <div className="link-submit-title">SUBMİT A LİNK</div>
    </Link>
  );
};

export default Submit;
