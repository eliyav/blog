import React from "react";

export interface Post {
  title: string;
  content: string;
  date: { date: string; time: string };
}

const Post: React.VFC<Post> = ({ title, content, date }) => {
  return (
    <div className="post">
      <h1 className="post-title">{title}</h1>
      <p className="post-content">{content}</p>
      <p className="post-date">
        {date.date} at {date.time}
      </p>
    </div>
  );
};

export default Post;
