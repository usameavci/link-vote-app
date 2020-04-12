import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import LinkList from "../../../components/links/List/List";
import LinkSort from "../../../components/links/Sort/Sort";
import { LinkContext } from "../../../contexts/LinkContext";
import LinkSubmit from "../../../components/links/Submit/Submit";
import LinkPagination from "../../../components/links/Pagination/Pagination";

import "./index.css";

const PageIndex = () => {
  const { links } = useContext(LinkContext);

  return (
    <div data-testid="page-index" className="page-index">
      <div className="page-index-block">
        <LinkSubmit />
      </div>
      <div className="page-index-block">
        <LinkSort />
        <LinkList items={links.data} />
        <LinkPagination pagination={links.meta} />
      </div>
    </div>
  );
};

export default withRouter(PageIndex);
