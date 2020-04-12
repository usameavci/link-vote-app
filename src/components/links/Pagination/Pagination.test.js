import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Pagination from "./Pagination";

describe("Index page component tests", () => {
  it("renders without crashing", () => {
    const component = (
      <Router>
        <Pagination />
      </Router>
    );

    const { getByTestId } = render(component);

    expect(getByTestId("link-pagination")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = (
      <Router>
        <Pagination />
      </Router>
    );

    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
