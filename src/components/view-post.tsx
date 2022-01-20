import React from "react";
import NotFound from "./notfound";
import { Post } from "./post";

export interface PostProps {
  title: string;
  description: string;
  content: string;
  created: string;
  id: string;
}

export const ViewPost: React.VFC<{
  post?: PostProps;
}> = ({ post: { title, description, content, created, id } }) =>
  title ? (
    <div className="display-width">
      <h1 className="page-title">Blog Post</h1>
      <Post
        title={title}
        description={description}
        content={content}
        created={created}
        id={id}
        expanded={true}
      />
    </div>
  ) : (
    <NotFound />
  );
