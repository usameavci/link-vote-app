import get from "lodash/get";
import map from "lodash/map";
import ceil from "lodash/ceil";
import reduce from "lodash/reduce";
import classNames from "classnames";
import uniqueId from "lodash/uniqueId";
import toSafeInteger from "lodash/toSafeInteger";
import React, { useEffect, useState } from "react";

import "./pagination.css";

const _createRange = (props, total, perPage = 5, current = 1, itemLimit = 3) => {
  const pageCount = ceil(total / perPage);

  current = current <= 0 ? 1 : current;
  current = current > pageCount ? pageCount : current;

  const range = [];
  const lowerLimit = current - itemLimit > 1 ? current - itemLimit : 1;
  const upperLimit = current + itemLimit < pageCount ? current + itemLimit : pageCount;

  if (1 < current) {
    range.push({
      key: uniqueId(),
      number: current - 1,
      label: props.prevLabel || "<",
      active: false,
    });
  }

  for (let i = lowerLimit; i <= upperLimit; i++) {
    range.push({
      key: uniqueId(),
      number: i,
      label: i,
      active: i === current,
    });
  }

  if (current < pageCount) {
    range.push({
      key: uniqueId(),
      number: current + 1,
      label: props.nextLabel || ">",
      active: false,
    });
  }

  return range;
};
const _getRangeParams = (props) =>
  reduce(
    ["total", "perPage", "current", "itemLimit"],
    (acc, curr) => acc.push(toSafeInteger(get(props, curr))) && acc,
    []
  );

const Pagination = (props) => {
  const rangeParams = _getRangeParams(props);
  const [range, setRange] = useState(_createRange(props, ...rangeParams));

  const handleOnClick = (page) => {
    const rangeParams = _getRangeParams({ ...props, current: page.number });
    setRange(_createRange(props, ...rangeParams));

    if (props.onChange && typeof props.onChange === "function") {
      props.onChange(page);
    }
  };

  const handleRangeChange = () => {
    setRange(_createRange(props, ...rangeParams));
  };

  useEffect(handleRangeChange, [props]);

  return (
    <div className="common-pagination">
      {map(range, (page) => (
        <div
          className={classNames("common-pagination-page", {
            "common-pagination-page--active": page.active,
          })}
          key={page.key}
          onClick={() => handleOnClick(page)}
        >
          {page.label}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
