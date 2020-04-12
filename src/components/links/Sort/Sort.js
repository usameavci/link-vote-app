import find from "lodash/find";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import Url from "../../../utils/Url";
import CommonSelect from "../../common/Select/Select";

const Sort = ({ history, location }) => {
  const url = new Url(location);
  const { sort, order } = url.toObject({ only: ["sort", "order"] });

  const [options] = useState([
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
  ]);

  const defaultSelectedOption = find(options, { sort, order });
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  useEffect(() => {
    setSelectedOption(find(options, { sort, order }));
  }, [options, sort, order]);

  const handleChange = (option) => {
    setSelectedOption(option);

    if (option.sort && option.order) {
      url.setParam("sort", option.sort);
      url.setParam("order", option.order);
    } else {
      url.deleteParam("sort");
      url.deleteParam("order");
    }

    history.push({ pathname: url.getPathName(), search: url.toString({ full: true }) });
  };

  return (
    <div data-testid="link-sort" className="link-sort">
      <CommonSelect value={selectedOption} options={options} onChange={handleChange} />
    </div>
  );
};

export default withRouter(Sort);
