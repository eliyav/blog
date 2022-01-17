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
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        new URL("api/posts", "http://localhost:1234").href
      );
      const postData = await data.json();
      setPosts(() => [...postData.posts]);
    };
    fetchPosts();
  }, []);

  const queryPostsById = (params) => {
    return posts.find((post) => post.id === params.postId);
  };

  const queryPostsByName = (name: string) => {
    const filteredPosts = posts.reduce((previousValue, currentValue) => {
      const checkIfTrue = currentValue.title
        .toLocaleLowerCase()
        .includes(name.toLocaleLowerCase());
      if (checkIfTrue) previousValue.push(currentValue);
      return previousValue;
    }, []);
    setFilteredPosts(() => [...filteredPosts]);
  };

  return (
    <>
      <Header list={navbarItems} queryPosts={queryPostsByName} />
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} filteredPosts={filteredPosts} />}
        />
        <Route
          path="/posts/:postId"
          element={<ViewPost queryPosts={queryPostsById} />}
        />
        <Route
          path="create-post"
          element={<CreatePost savePost={setPosts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
