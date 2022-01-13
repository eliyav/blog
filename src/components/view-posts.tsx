import React from "react";
import PostEle, { Post } from "./post";
import "../styles/view-posts.css";

const ViewPosts: React.VFC<{ posts: Post[] }> = ({ posts }) => {
  const displayPosts = posts.map((post, idx) => (
    <PostEle
      title={post.title}
      content={post.content}
      date={post.date}
      key={idx}
    />
  ));
  return (
    <div className="posts-container">
      <h1 className="page-title">Blog History</h1>
      {posts.length ? displayPosts : <div>No Posts to Display!</div>}
    </div>
  );
};

export default ViewPosts;
