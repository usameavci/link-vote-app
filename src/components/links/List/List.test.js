import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import List from "./List";
import LinkContextProvider from "../../../contexts/LinkContext";

describe("Index page component tests", () => {
  const links = [
    {
      title: "Google",
      url: "https://google.com",
      vote: 0,
      createdAt: "2020-04-12T15:38:53.412Z",
      updatedAt: "2020-04-12T15:38:53.412Z",
      id: "dbde0208-9f9e-2304-2cfe-d5af1359b1b4",
    },
    {
      title: "Stackowerflow",
      url: "https://stackoverflow.com",
      vote: 0,
      createdAt: "2020-04-12T15:38:53.413Z",
      updatedAt: "2020-04-12T15:38:53.413Z",
      id: "acf1831e-ade6-6c67-9140-98f675c13e26",
    },
    {
      title: "Github",
      url: "https://github.com",
      vote: 0,
      createdAt: "2020-04-12T15:38:53.413Z",
      updatedAt: "2020-04-12T15:38:53.413Z",
      id: "22c0f632-9e7f-9f0d-d26e-7a47d5ed0002",
    },
  ];

  it("renders without crashing", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <List />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("link-list")).toBeInTheDocument();
  });

  it("renders as empty list", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <List />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("link-list-empty")).toBeInTheDocument();
  });

  it("renders as filled list", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <List items={links} />
        </LinkContextProvider>
      </Router>
    );

    let getAllByTestId;

    await act(async () => ({ getAllByTestId } = await render(component)));

    expect(getAllByTestId("link-item").length).toBe(3);
  });

  it("matches snapshots", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <List />
        </LinkContextProvider>
      </Router>
    );

    let tree;

    await renderer.act(async () => (tree = renderer.create(component)));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
