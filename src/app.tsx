import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import CreatePost from "./components/create-post";
import ViewPosts from "./components/view-posts";
import NotFound from "./components/notfound";
import { NavbarItems } from "./components/navbar";
import { Post } from "./components/post";

const navbarItems: NavbarItems[] = [
  {
    path: "/CreatePost",
    text: "New Post",
  },
  { path: "/ViewPosts", text: "Blog History" },
];

const App: React.VFC = () => {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        new URL("api/posts", "http://localhost:1234").href
      );
      const postData = await data.json();
      setPost((posts) => [...posts, ...postData.posts]);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Navbar list={navbarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost savePost={setPost} />} />
        <Route path="/ViewPosts" element={<ViewPosts posts={posts} />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
