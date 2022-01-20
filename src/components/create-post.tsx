import React from "react";
import "../styles/create-post.css";
import { PostProps } from "./view-post";

interface CreatePostProps {
  onFormSubmit: (post: PostProps) => void;
  nextPostId: string;
}

const CreatePost: React.VFC<CreatePostProps> = ({
  onFormSubmit,
  nextPostId,
}) => {
  return (
    <div className="create-post display-width">
      <h1 className="page-title">Create a Post</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const date = new Date();
          const formData = new FormData(ev.currentTarget);
          onFormSubmit({
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            content: formData.get("content") as string,
            created: date.toUTCString(),
            id: nextPostId,
          });
          ev.currentTarget.reset();
        }}
      >
        <label>Title:</label>
        <input name="title" placeholder="Enter Title" required />
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Short caption"
          required
        ></textarea>
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
