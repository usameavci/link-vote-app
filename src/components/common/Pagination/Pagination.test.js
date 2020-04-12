import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination component tests", () => {
  it("renders without crashing", () => {
    const component = <Pagination />;

    const { getByTestId } = render(component);

    expect(getByTestId("common-pagination")).toBeInTheDocument();
  });

  it("renders pagination links without crashing", () => {
    const component = <Pagination total={20} current={1} perPage={5} itemLimit={3} />;

    const { getAllByTestId } = render(component);

    expect(getAllByTestId("common-pagination-link").length).toBe(5);
  });

  it("matches snapshots", () => {
    const component = <Pagination />;
    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
