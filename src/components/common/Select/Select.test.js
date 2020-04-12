import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Select from "./Select";

describe("Select component tests", () => {
  const options = [
    {
      id: 1,
      label: "Creation Date",
      sort: "default",
    },
    {
      id: 2,
      label: "Most Voted (Z -> A)",
      sort: "vote",
      order: "desc",
    },
    {
      id: 3,
      label: "Less Voted (A -> Z)",
      sort: "vote",
      order: "asc",
    },
  ];

  it("renders without crashing", () => {
    const component = <Select options={options} />;

    const { getByTestId } = render(component);

    expect(getByTestId("common-select")).toBeInTheDocument();
  });

  it("matches snapshots", () => {
    const component = <Select options={options} />;
    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
