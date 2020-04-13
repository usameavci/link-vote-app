import React, { useContext } from "react";

import LinkItem from "../Item/Item";

import "./list.css";
import { LinkContext } from "../../../contexts/LinkContext";

const List = (props) => {
  const { loadExampleData } = useContext(LinkContext);

  return (
    <div data-testid="link-list" className="link-list">
      {props.items && props.items.length ? (
        props.items.map((link) => <LinkItem link={link} key={link.id} />)
      ) : (
        <div data-testid="link-list-empty">
          <div className="text-center">There is a no links here</div>
          <div className="text-center"><button onClick={loadExampleData}>Load Example Data</button></div>
        </div>
      )}
    </div>
  );
};

export default List;
