import React from "react";
import NotFound from "./notfound";
import { Post, PostProps } from "./post";

export const ViewPost: React.VFC<{
  post?: PostProps;
}> = ({ post }) =>
  post ? (
    <div className="display-width">
      <h1 className="page-title">Blog Post</h1>
      <Post post={post} expanded={true} />
    </div>
  ) : (
    <NotFound />
  );
