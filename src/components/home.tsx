import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { paginate } from "../helpers/pagination";
import "../styles/posts.css";
import { Post } from "./post";
import { PostProps } from "./view-post";

const paginatePosts =
  (startIdx: number, closeIdx: number) =>
  (previousValue, currentValue, idx) => {
    if (idx <= startIdx && idx > closeIdx) {
      const { title, description, content, created, id } = currentValue;
      return [
        ...previousValue,
        <Post
          title={title}
          description={description}
          content={content}
          created={created}
          id={id}
          expanded={false}
          key={idx}
        />,
      ];
    }
    return previousValue;
  };

const Home: React.VFC<{ posts: PostProps[]; page?: number }> = ({ posts }) => {
  const params = useParams();
  const { page, maxPage, startIdx, closeIdx } = paginate(
    params.pageId,
    posts.length
  );

  const displayPosts = posts.reduceRight(paginatePosts(startIdx, closeIdx), []);

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
