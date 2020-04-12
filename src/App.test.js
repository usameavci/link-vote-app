import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { create, act as actRenderer } from "react-test-renderer";

import App from "./App";

describe("App component tests", () => {
  it("renders without crashing", async () => {
    const component = <App />;

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("app")).toBeInTheDocument();
  });

  it("matches snapshots", async () => {
    const component = <App />;

    let tree;

    await actRenderer(async () => (tree = create(component)));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
