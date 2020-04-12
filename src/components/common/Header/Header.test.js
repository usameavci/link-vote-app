import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header component tests", () => {
  it("renders without crashing", async () => {
    const component = (
      <Router>
        <Header />
      </Router>
    );

    const { getByTestId } = render(component);

    expect(getByTestId("common-header")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = (
      <Router>
        <Header />
      </Router>
    );

    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
