import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import CreatePost from "./components/create-post";
import NotFound from "./components/notfound";
import { HeaderItems } from "./components/header";
import { PostProps } from "./components/post";

const navbarItems: HeaderItems[] = [
  {
    path: "/CreatePost",
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
      setPost((posts) => [...postData.posts]);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header list={navbarItems} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/CreatePost" element={<CreatePost savePost={setPost} />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
