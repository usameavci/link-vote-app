import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Submit from "./Submit";

describe("Links sort component tests", () => {
  it("renders without crashing", () => {
    const component = (
      <Router>
        <Submit />
      </Router>
    );

    const { getByTestId } = render(component);

    expect(getByTestId("link-submit")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = (
      <Router>
        <Submit />
      </Router>
    );

    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
