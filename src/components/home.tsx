import React from "react";
import { Link } from "react-router-dom";
import "../styles/posts.css";
import { Post } from "./post";
import { PostProps } from "./view-post";

const Home: React.VFC<{
  posts: PostProps[];
  pages: number[];
  currentPage: number;
}> = ({ posts, pages, currentPage }) => {
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
        <div className="page-navigation">
          <Link to={`/page/${currentPage - 1}`} className="left-arrow">
            {currentPage != 1 ? "←Previous" : null}
          </Link>
          {pages.map((page) => (
            <Link to={`/page/${page}`}>
              <span className={page === currentPage ? "currentPage" : null}>
                {page}
              </span>
            </Link>
          ))}
          <Link to={`/page/${currentPage + 1}`} className="right-arrow">
            {currentPage < pages.at(-1) ? "Next→" : null}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
