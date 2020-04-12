import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Container from "./Container";

describe("Container component tests", () => {
  it("renders without crashing", async () => {
    const component = <Container />;

    const { getByTestId } = render(component);

    expect(getByTestId("common-container")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = <Container />;
    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
