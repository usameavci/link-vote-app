import React from "react";

import LinkItem from "../Item/Item";

import "./list.css";

const List = (props) => {
  return (
    <div data-testid="link-list" className="link-list">
      {props.items && props.items.length ? (
        props.items.map((link) => <LinkItem link={link} key={link.id} />)
      ) : (
        <div data-testid="link-list-empty">There is a no links here</div>
      )}
    </div>
  );
};

export default List;
