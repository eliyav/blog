import React from "react";

export interface PostProps {
  title: string;
  content: string;
  date: { date: string; time: string };
}

export const Post: React.VFC<PostProps> = ({ title, content, date }) => {
  return (
    <div className="post">
      <p className="post-date">
        {date.date} at {date.time}
      </p>
      <h1 className="post-title">{title}</h1>
      <p className="post-content">{content}</p>
    </div>
  );
};
