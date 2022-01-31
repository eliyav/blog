import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import CreatePost from "./components/create-post";
import NotFound from "./components/not-found";
import { HeaderItems } from "./components/header";
import { PostProps } from "./components/view-post";
import { ViewPost } from "./components/view-post";
import { usePagination } from "./hooks/use-pagination";
import postsJSON from "../posts.json";

const navbarItems: HeaderItems[] = [
  {
    path: "/create-post",
    text: "New Post",
  },
];
const findBy = (key: keyof PostProps, value: string) => (post: PostProps) =>
  post[key] === value;

const searchBy = (key: keyof PostProps, value: string) => (post: PostProps) =>
  post[key].toLocaleLowerCase().includes(value.toLocaleLowerCase());

const App: React.VFC = () => {
  const postMatch = useMatch("/posts/:postId");
  const pageMatch = useMatch("/page/:pageId");
  const [posts, setPosts] = useState<readonly PostProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const post = useMemo(
    () => posts.find(findBy("id", postMatch?.params?.postId!)),
    [postMatch, posts]
  );
  const filteredPosts = useMemo(
    () => posts.filter(searchBy("title", search)),
    [search, posts]
  );
  const { pagination, pageNavigation } = usePagination(
    filteredPosts.length,
    pageMatch ? pageMatch?.params?.pageId! : null
  );
  const shownPosts = useMemo(
    () => filteredPosts.slice(pagination.startIndex, pagination.endIndex + 1),
    [filteredPosts, pageMatch]
  );

  useEffect(() => {
    setPosts(new Array(100).fill(postsJSON.posts).flat().reverse());
  }, []);

  return (
    <>
      <Header links={navbarItems} onSearch={setSearch} searchedValue={search} />
      <Routes>
        <Route
          path="/"
          element={<Home posts={shownPosts} navigation={pageNavigation} />}
        />
        <Route
          path="/page/:pageId"
          element={<Home posts={shownPosts} navigation={pageNavigation} />}
        />
        <Route path="/posts/:postId" element={<ViewPost post={post!} />} />
        <Route
          path="create-post"
          element={
            <CreatePost
              onFormSubmit={(post) => setPosts([post, ...posts])}
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
