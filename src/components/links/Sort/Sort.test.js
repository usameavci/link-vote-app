import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Sort from "./Sort";

describe("Links sort component tests", () => {
  it("renders without crashing", () => {
    const component = (
      <Router>
        <Sort />
      </Router>
    );

    const { getByTestId } = render(component);

    expect(getByTestId("link-sort")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = (
      <Router>
        <Sort />
      </Router>
    );

    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
