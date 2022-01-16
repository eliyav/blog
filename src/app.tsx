import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, useSearchParams } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import CreatePost from "./components/create-post";
import NotFound from "./components/notfound";
import { HeaderItems } from "./components/header";
import { PostProps } from "./components/post";
import { ViewPost } from "./components/view-post";

const navbarItems: HeaderItems[] = [
  {
    path: "/create-post",
    text: "New Post",
  },
];

const App: React.VFC = () => {
  const [posts, setPost] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        new URL("api/posts", "http://localhost:1234").href
      );
      const postData = await data.json();
      setPost(() => [...postData.posts]);
    };
    fetchPosts();
  }, []);

  const queryPosts = (params) => {
    return posts.find((post) => post.id === params.postId);
  };

  return (
    <>
      <Header list={navbarItems} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/posts/:postId"
          element={<ViewPost queryPosts={queryPosts} />}
        />
        <Route path="create-post" element={<CreatePost savePost={setPost} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
