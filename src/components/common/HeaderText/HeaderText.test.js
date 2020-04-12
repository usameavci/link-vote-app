import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import HeaderText from "./HeaderText";

describe("HeaderText component tests", () => {
  it("renders without crashing", async () => {
    const component = <HeaderText />;

    const { getByTestId } = render(component);

    expect(getByTestId("common-header-text")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = <HeaderText />;
    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
