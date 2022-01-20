import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import CreatePost from "./components/create-post";
import NotFound from "./components/notfound";
import { HeaderItems } from "./components/header";
import { PostProps } from "./components/view-post";
import { ViewPost } from "./components/view-post";

const navbarItems: HeaderItems[] = [
  {
    path: "/create-post",
    text: "New Post",
  },
];

const findBy = (key: keyof PostProps, value: string) => (post) =>
  post[key] === value;

const searchBy = (key: keyof PostProps, value: string) => (post) =>
  post[key].toLocaleLowerCase().includes(value.toLocaleLowerCase());

const App: React.VFC = () => {
  const postMatch = useMatch("/posts/:postId");
  const pageMatch = useMatch("/page/:pageId");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const post = useMemo(
    () => posts.find(findBy("id", postMatch?.params?.postId)),
    [postMatch, posts]
  );
  const filteredPosts = useMemo(
    () => posts.filter(searchBy("title", search)),
    [search, posts]
  );

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

  return (
    <>
      <Header links={navbarItems} onSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={filteredPosts} />} />
        <Route
          path="/page/:pageId"
          element={<Home posts={filteredPosts}></Home>}
        />
        <Route path="/posts/:postId" element={<ViewPost post={post} />} />
        <Route
          path="create-post"
          element={
            <CreatePost
              onFormSubmit={(post) => setPosts([...posts, post])}
              nextPostId={`winx-${posts.length + 1}`}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
