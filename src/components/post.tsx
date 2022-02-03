import React from "react";
import { Link } from "react-router-dom";
import { getDates } from "../helpers/dates";
import calendarIcon from "../icons/calendar-icon.png";
import clockIcon from "../icons/clock-icon.png";

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
        <img className="post-calendar-icon" src={calendarIcon}></img>
        <span>{dateString}</span>
        <img className="post-clock-icon" src={clockIcon}></img>
        <span className="post-date-history">{daysPassed}</span>
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
