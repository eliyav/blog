import React, { useRef } from "react";
import { PostProps } from "../components/post";
import "../styles/create-post.css";

interface CreatePostProps {
  savePost: React.Dispatch<React.SetStateAction<PostProps[]>>;
}

const CreatePost: React.VFC<CreatePostProps> = ({ savePost }) => {
  const formRef = useRef(null);
  return (
    <div className="create-post display-width">
      <h1 className="page-title">Create a Post</h1>
      <form
        ref={formRef}
        onSubmit={(e) => {
          const date = new Date();
          e.preventDefault();
          const formData = new FormData(formRef.current);
          savePost((prevState) => [
            {
              title: formData.get("title") as string,
              content: formData.get("content") as string,
              date: {
                date: date.toDateString(),
                time: date.toLocaleTimeString(),
              },
            },
            ...prevState,
          ]);
        }}
      >
        <label>Title:</label>
        <input name="title" placeholder="Enter Title" required />
        <label>Content:</label>
        <textarea
          name="content"
          placeholder="Write a Story"
          required
        ></textarea>
        <button>Save Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
