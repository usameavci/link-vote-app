import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PageIndex from "./Index";
import LinkContextProvider from "../../../contexts/LinkContext";

describe("Index page component tests", () => {
  it("renders without crashing", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <PageIndex />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("page-index")).toBeInTheDocument();
  });

  it("matches snapshots", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <PageIndex />
        </LinkContextProvider>
      </Router>
    );

    let tree;

    await renderer.act(async () => (tree = renderer.create(component)));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
