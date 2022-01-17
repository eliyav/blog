import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { calcPageRequirements } from "../helpers/calcHelpers";
import "../styles/posts.css";
import { PostProps, Post } from "./post";

const Home: React.VFC<{ posts: PostProps[]; page?: number }> = ({ posts }) => {
  const params = useParams();
  const [page, maxPage, startIdx, closeIdx] = calcPageRequirements(
    params.pageId,
    posts.length
  );

  let displayPosts = [];
  for (let i = posts.length - 1; i >= 0; i--) {
    if (i <= startIdx && i > closeIdx)
      displayPosts.push(<Post post={posts[i]} expanded={false} key={i} />);
  }

  return (
    <main className="home display-width">
      <section className="intro">
        <div className="posts-container">
          <h1 className="page-title">Latest Posts</h1>
          {displayPosts ? displayPosts : <div>No Posts to Display!</div>}
        </div>
        <div className="page-navigation">
          <Link to={`/page/${page - 1}`} className="left-arrow">
            {page != 1 ? "←" : ""}
          </Link>
          <span>{page}</span>
          <Link to={`/page/${page + 1}`} className="right-arrow">
            {page < maxPage ? "→" : ""}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
