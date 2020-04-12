import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Logo from "./Logo";

describe("Logo component tests", () => {
  it("renders without crashing", async () => {
    const component = (
      <Router>
        <Logo />
      </Router>
    );

    const { getByTestId } = render(component);

    expect(getByTestId("common-logo")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = (
      <Router>
        <Logo />
      </Router>
    );

    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
