import upperCase from "lodash/upperCase";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";

import Notification from "../../../utils/Notification";
import { LinkContext } from "../../../contexts/LinkContext";

import "./submit.css";

const PageSubmit = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const { addLink } = useContext(LinkContext);

  const handleFormSubmit = (e) => {
    if (!url || !title) {
      Notification.error("Title and url fields can not be empty!");

      return e.preventDefault();
    }

    addLink({ url, title }).then(() => {
      Notification.success(`<b>${upperCase(title)}</b> added`);

      setUrl("");
      setTitle("");
    });

    return e.preventDefault();
  };

  return (
    <div data-testid="page-submit" className="page-submit">
      <Link to="/" className="page-submit-back">
        <i className="fa fa-arrow-left" />
        <span>Return to list</span>
      </Link>

      <h1 className="page-submit-title">Add New Link</h1>

      <form data-testid="submit-form" className="page-submit-form" onSubmit={handleFormSubmit}>
        <div className="page-submit-group">
          <label className="page-submit-label" htmlFor="title">
            Link Name:
          </label>
          <input
            data-testid="submit-form-input-title"
            type="text"
            value={title}
            placeholder="e.g. Alphabet"
            className="page-submit-input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="page-submit-group">
          <label className="page-submit-label" htmlFor="title">
            Link URL:
          </label>
          <input
            data-testid="submit-form-input-url"
            type="text"
            value={url}
            className="page-submit-input"
            placeholder="e.g. http://abc.xyz"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="text-right">
          <button data-testid="submit-form-button-submit" type="submit" className="page-submit-button">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageSubmit;
