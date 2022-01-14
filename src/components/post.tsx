import React from "react";
import { Link } from "react-router-dom";

export interface PostProps {
  title: string;
  content: string;
  date: { date: string; time: string };
}

export const Post: React.VFC<PostProps> = ({ title, content, date}) => {
  return (
    <div className="post">
      <p className="post-date">
        {date.date} at {date.time}
      </p>
      <h1 className="post-title" ><Link to="/post#">{title}</Link></h1>
      <div className="post-title-animation"></div>
      <p className="post-content">{content}</p>
    </div>
  );
};
