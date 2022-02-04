import React from "react";
import { Link } from "react-router-dom";
import { getDates } from "../helpers/dates";
import calendarIcon from "../icons/calendar-icon.png";
import clockIcon from "../icons/clock-icon.png";
//@ts-ignore
import Output from "editorjs-react-renderer";
import { OutputData } from "@editorjs/editorjs";

export const Post: React.VFC<{
  id: string;
  title: string;
  content: string;
  expanded?: boolean;
}> = ({ id, title, content, expanded = false }) => {
  const data: OutputData = JSON.parse(content);
  const { dateString, daysPassed } = getDates(data.time!);

  return (
    <div className="post">
      <p className="post-date">
        <img className="post-calendar-icon" src={calendarIcon}></img>
        <span>{dateString}</span>
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
      {expanded ? (
        <div className="post-content">
          <Output data={data} />
        </div>
      ) : null}
      {!expanded ? <div className="post-divider"></div> : null}
    </div>
  );
};
