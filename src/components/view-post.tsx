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
      <div className="posts-container">
        <Post
          title={title}
          description={description}
          content={content}
          created={created}
          id={id}
          expanded={true}
        />
      </div>
    </div>
  ) : (
    <NotFound />
  );
