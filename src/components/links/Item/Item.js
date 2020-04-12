import upperCase from "lodash/upperCase";
import React, { useContext } from "react";

import Notification from "../../../utils/Notification";
import { LinkContext } from "../../../contexts/LinkContext";

import "./item.css";

const Item = (props) => {
  const { deleteLink, voteLink } = useContext(LinkContext);

  const handleDeleteLink = (e) => {
    Notification.prompt(
      "Remove Link",
      `Do you want to remove:<br><b>${upperCase(props.link.title)}</b>`,
      (notification) => {
        deleteLink(props.link).then(() => {
          notification.close();

          Notification.success(`${upperCase(props.link.title)} removed`);
        });
      }
    );

    return e.preventDefault();
  };

  return (
    <div data-testid="link-item" className="link-item">
      <button data-testid="link-item-remove" className="link-item-remove" onClick={handleDeleteLink}>
        <i className="fa fa-times" />
      </button>
      <div className="link-item-vote">
        <div className="vote-point">{props.link.vote}</div>
        <div className="vote-label">POINTS</div>
      </div>
      <div className="link-item-body">
        <div className="link-item-title">{props.link.title}</div>
        <div className="link-item-url">({props.link.url})</div>
        <div className="link-item-actions">
          <button
            data-testid="link-item-up-vote"
            className="link-item-action"
            onClick={() => voteLink(props.link, "up")}
          >
            <i className="fa fa-arrow-up" /> Up Vote
          </button>
          <button
            data-testid="link-item-down-vote"
            className="link-item-action"
            onClick={() => voteLink(props.link, "down")}
          >
            <i className="fa fa-arrow-down" /> Down Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
