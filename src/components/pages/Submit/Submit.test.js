import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer, { act as actRenderer } from "react-test-renderer";

import PageSubmit from "./Submit";
import LinkContextProvider from "../../../contexts/LinkContext";

describe("Submit page component tests", () => {
  it("renders without crashing", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <PageSubmit />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("page-submit")).toBeInTheDocument();
    expect(getByTestId("submit-form")).toBeInTheDocument();
    expect(getByTestId("submit-form-input-title")).toBeInTheDocument();
    expect(getByTestId("submit-form-input-url")).toBeInTheDocument();
    expect(getByTestId("submit-form-button-submit")).toBeInTheDocument();
  });

  it("matches snapshots", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <PageSubmit />
        </LinkContextProvider>
      </Router>
    );

    let tree;

    await actRenderer(async () => (tree = renderer.create(component)));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
