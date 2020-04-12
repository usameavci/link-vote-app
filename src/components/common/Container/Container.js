import React from "react";

import "./container.css";

const Container = ({ children }) => {
  return <div data-testid="common-container" className="common-container">{children}</div>;
};

export default Container;
