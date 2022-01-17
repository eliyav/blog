import React from "react";
import "../styles/posts.css";
import { PostProps, Post } from "./post";

const Home: React.VFC<{ posts: PostProps[]; filteredPosts: PostProps[] }> = ({
  posts,
  filteredPosts,
}) => {
  let displayPosts;
  if (filteredPosts.length) {
    displayPosts = filteredPosts.map((post, idx) => (
      <Post post={post} expanded={false} key={idx} />
    ));
  } else {
    displayPosts = posts.map((post, idx) => (
      <Post post={post} expanded={false} key={idx} />
    ));
  }

  return (
    <main className="home display-width">
      <section className="intro">
        <div className="posts-container">
          <h1 className="page-title">Latest Posts</h1>
          {displayPosts ? displayPosts : <div>No Posts to Display!</div>}
        </div>
      </section>
    </main>
  );
};

export default Home;
