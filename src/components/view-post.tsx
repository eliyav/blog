import React from "react";
import NotFound from "./not-found";
import { Post } from "./post";
import { ScrollToTop } from "./scroll-to-top";

export interface PostProps {
  id: string;
  title: string;
  content: string;
}

export const ViewPost: React.VFC<{
  post: PostProps;
}> = ({ post: { id, title, content } }) =>
  title ? (
    <div className="display-width">
      <div className="posts-container">
        <Post id={id} title={title} content={content} expanded={true} />
      </div>
      <div className="navigation">
        <ScrollToTop />
      </div>
    </div>
  ) : (
    <NotFound />
  );
