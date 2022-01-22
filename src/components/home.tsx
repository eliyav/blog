import React from "react";
import "../styles/posts.css";
import { Post } from "./post";
import { PostProps } from "./view-post";

const Home: React.VFC<{
  posts: PostProps[];
  PageNavigation: () => JSX.Element;
}> = ({ posts, PageNavigation }) => {
  return (
    <main className="home display-width">
      <section className="intro">
        <div className="posts-container">
          <h1 className="page-title">Latest Posts</h1>
          {posts ? (
            posts.map((post, idx) => (
              <Post
                title={post.title}
                description={post.description}
                content={post.content}
                created={post.created}
                id={post.id}
                key={idx}
              />
            ))
          ) : (
            <div>No Posts to Display!</div>
          )}
        </div>
        <PageNavigation />
      </section>
    </main>
  );
};

export default Home;
