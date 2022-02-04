import React from "react";
import "../styles/posts.css";
import { Navigation } from "./navigation";
import { Post } from "./post";
import { PostProps } from "./view-post";

const Home: React.VFC<{
  posts: PostProps[];
  navigation: Navigation;
}> = ({ posts, navigation }) => {
  return (
    <main className="home display-width">
      <section className="intro">
        <div className="posts-container">
          <h1 className="page-title">Latest Posts</h1>
          {posts ? (
            posts.map((post, idx) => (
              <Post
                id={post.id}
                title={post.title}
                content={post.content}
                key={idx}
              />
            ))
          ) : (
            <div>No Posts to Display!</div>
          )}
        </div>
        <Navigation navigation={navigation} />
      </section>
    </main>
  );
};

export default Home;
