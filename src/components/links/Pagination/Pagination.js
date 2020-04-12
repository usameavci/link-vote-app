import React from "react";
import { withRouter } from "react-router-dom";

import Url from "../../../utils/Url";
import CommonPagination from "../../common/Pagination/Pagination";

import "./pagination.css";

const Pagination = ({ pagination, history, location }) => {
  const url = new Url(location);

  const handleOnChange = (page) => {
    if (page.number && page.number !== 1) {
      url.setParam("page", page.number);
    } else {
      url.deleteParam("page");
    }
    history.push({ pathname: location.pathname, search: url.toString({ full: true }) });
  };

  return (
    <div data-testid="link-pagination" className="link-pagination">
      {pagination && pagination.count > 1 ? (
        <CommonPagination
          total={pagination.total}
          current={url.getParam("page")}
          perPage={pagination.perPage}
          itemLimit={3}
          onChange={handleOnChange}
          prevLabel={<i className="fa fa-chevron-left" />}
          nextLabel={<i className="fa fa-chevron-right" />}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default withRouter(Pagination);
