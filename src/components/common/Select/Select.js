import map from "lodash/map";
import get from "lodash/get";
import head from "lodash/head";
import React, { useEffect, useState } from "react";

import "./select.css";

const Select = (props) => {
  const [opened, setOpened] = useState(false);
  const [options] = useState(get(props, "options", []));

  const defaultSelectedOption = props.value || head(options);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  const handleClick = (option) => {
    setOpened(false);
    setSelectedOption(option);

    if (props.onChange && typeof props.onChange === "function") {
      props.onChange(option);
    }
  };

  useEffect(() => {
    setSelectedOption(props.value || defaultSelectedOption);
  }, [props.value, defaultSelectedOption]);

  return (
    <div data-testid="common-select" className={"common-select" + (opened ? " common-select--opened" : "")}>
      <div className="common-select-label" onClick={() => setOpened(!opened)}>
        <span className="common-select-label-inner">{selectedOption.label}</span>

        <span className="common-select-label-icon">
          {opened ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
        </span>
      </div>

      <div className="common-select-options" style={{ display: opened ? "block" : "none" }}>
        {map(options, (option) => (
          <div className="common-select-option" key={option.id} onClick={() => handleClick(option)}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
