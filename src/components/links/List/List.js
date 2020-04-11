import React from "react";

import LinkItem from "../Item/Item";

import "./list.css";

const List = (props) => {
  return (
    <div className="link-list">
      {props.items && props.items.length ? (
        props.items.map((link) => <LinkItem link={link} key={link.id} />)
      ) : (
        <div>There is a no links here</div>
      )}
    </div>
  );
};

export default List;
