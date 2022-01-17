import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setFilteredPosts(() => [...posts]);
  }, [posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        new URL("api/posts", "http://localhost:1234").href
      );
      const postData = await data.json();
      setPosts(() => [...postData.posts]);
      setFilteredPosts(() => [...postData.posts]);
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

  const onFormSubmit = (e: FormEvent) => {
    const date = new Date();
    e.preventDefault();
    const formData = new FormData(formRef.current);
    setPosts((prevState) => [
      ...prevState,
      {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        created: date.toUTCString(),
        id: `Winx-${posts.length + 1}`,
      },
    ]);
    formRef.current.reset();
  };

  return (
    <>
      <Header list={navbarItems} queryPosts={queryPostsByName} />
      <Routes>
        <Route path="/" element={<Home posts={filteredPosts} />} />
        <Route
          path="/page/:pageId"
          element={<Home posts={filteredPosts}></Home>}
        />
        <Route
          path="/posts/:postId"
          element={<ViewPost queryPosts={queryPostsById} />}
        />
        <Route
          path="create-post"
          element={<CreatePost onFormSubmit={onFormSubmit} formRef={formRef} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
