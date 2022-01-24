import React from "react";
import { Link } from "react-router-dom";
import { getDates } from "../helpers/dates";

export const Post: React.VFC<{
  title: string;
  description: string;
  content: string;
  created: string;
  id: string;
  expanded?: boolean;
}> = ({ title, description, content, created, id, expanded = false }) => {
  const highlight = expanded ? "" : "highlight";
  const { dateString, daysPassed } = getDates(created);

  return (
    <div className="post">
      <p className="post-date">
        {dateString} <span className="post-date-history">{daysPassed}</span>
      </p>
      <h1 className="post-title">
        {expanded ? (
          <span>{title}</span>
        ) : (
          <Link to={`/posts/${id}`} onClick={() => window.scrollTo(0, 0)}>
            {title}
          </Link>
        )}
        <div className="post-title-animation"></div>
      </h1>
      <div className={"post-description" + ` ${highlight}`}>{description}</div>
      {expanded ? <p className="post-content">{content}</p> : null}
    </div>
  );
};
