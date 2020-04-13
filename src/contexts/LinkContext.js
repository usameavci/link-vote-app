import { withRouter } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import Url from "../utils/Url";
import LinkService from "../services/LinkService";

export const LinkContext = createContext();

const LinkContextProvider = ({ children, location }) => {
  const service = new LinkService();

  const url = new Url(location);
  const metaKeys = ["page", "sort", "order"];
  const queryParams = url.toObject({ only: metaKeys });
  const filters = url.toObject({ except: metaKeys });

  const [links, setLinks] = useState({});

  const updateLinksState = () => {
    if (queryParams.sort === "vote") {
      queryParams.sort = [queryParams.sort, "updatedAt"];
      queryParams.order = [queryParams.order, "desc"];
    }

    const { sort, order, page } = queryParams;

    service.list(filters, { sort, order }, { page }).then(setLinks);
  };

  useEffect(updateLinksState, [queryParams.page, queryParams.sort, queryParams.order]);

  const addLink = async (payload) => {
    const defaults = {
      title: "Unnamed link",
      url: "/",
      vote: 0,
    };

    const response = await service.create({ ...defaults, ...payload });

    updateLinksState();

    return response;
  };

  const voteLink = async (link, type) => {
    if (!link || !type) return false;

    const vote = type === "up" ? ++link.vote : --link.vote;

    const response = await service.update({ id: link.id }, { vote });

    updateLinksState();

    return response;
  };

  const deleteLink = async (link) => {
    if (!link || !link.id) return;

    await service.delete(link.id);

    updateLinksState();

    return true;
  };

  const loadExampleData = async () => {
    await service.insertExampleData();

    updateLinksState();

    return true;
  };

  return (
    <LinkContext.Provider
      value={{
        links,
        addLink,
        voteLink,
        deleteLink,
        loadExampleData,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default withRouter(LinkContextProvider);
