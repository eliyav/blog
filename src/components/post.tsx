import React from "react";
import { Link } from "react-router-dom";

export interface PostProps {
  title: string;
  description: string;
  content: string;
  created: string;
  id: string;
}

export const Post: React.VFC<{ post: PostProps; expanded: boolean }> = ({
  post: { title, description, content, created, id },
  expanded,
}) => {
  const highlight = expanded ? "" : "highlight";
  const date = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(created));

  return (
    <div className="post">
      <p className="post-date">{date}</p>
      <h1 className="post-title">
        {expanded ? (
          <span>{title}</span>
        ) : (
          <Link to={`/posts/${id}`}>{title}</Link>
        )}
        <div className="post-title-animation"></div>
      </h1>
      <div className={"post-description" + ` ${highlight}`}>{description}</div>
      {expanded ? <p className="post-content">{content}</p> : null}
    </div>
  );
};
