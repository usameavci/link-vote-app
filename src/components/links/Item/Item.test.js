import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Item from "./Item";
import LinkContextProvider from "../../../contexts/LinkContext";

describe("Index page component tests", () => {
  const link = {
    title: "Google",
    url: "https://google.com",
    vote: 0,
    createdAt: "2020-04-12T15:38:53.412Z",
    updatedAt: "2020-04-12T15:38:53.412Z",
    id: "dbde0208-9f9e-2304-2cfe-d5af1359b1b4",
  };

  it("renders without crashing", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <Item link={link} />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("link-item")).toBeInTheDocument();
  });

  it("has up vote, down vote and remove buttons", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <Item link={link} />
        </LinkContextProvider>
      </Router>
    );

    let getByTestId;

    await act(async () => ({ getByTestId } = await render(component)));

    expect(getByTestId("link-item-remove")).toBeInTheDocument();
    expect(getByTestId("link-item-up-vote")).toBeInTheDocument();
    expect(getByTestId("link-item-down-vote")).toBeInTheDocument();
  });

  it("matches snapshots", async () => {
    const component = (
      <Router>
        <LinkContextProvider>
          <Item link={link} />
        </LinkContextProvider>
      </Router>
    );

    let tree;

    await renderer.act(async () => (tree = renderer.create(component)));

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
