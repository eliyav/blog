import React from "react";
import { useParams } from "react-router-dom";
import { Post, PostProps } from "./post";

export const ViewPost: React.VFC<{
  queryPosts: (params: any) => PostProps;
}> = ({ queryPosts }) => {
  const params = useParams();
  const post = queryPosts(params);

  return (
    <div className="display-width">
      <h1 className="page-title">Blog Post</h1>
      <Post post={post} expanded={true} />
    </div>
  );
};
