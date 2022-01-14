import React from "react";
import { PostProps, Post } from "./post";
import "../styles/posts.css";
import { Link } from "react-router-dom";

const Home: React.VFC<{ posts: PostProps[] }> = ({ posts }) => {
  const displayPosts = posts.map((post, idx) => (
    <Post
      title={post.title}
      content={post.content}
      date={post.date}
      key={idx}
    />
  ));
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
