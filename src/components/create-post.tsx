import React, { FormEvent } from "react";
import "../styles/create-post.css";

interface CreatePostProps {
  onFormSubmit: (e: FormEvent) => void;
  formRef: React.MutableRefObject<HTMLFormElement>;
}

// React.DOMAttributes<HTMLFormElement>.onSubmit?: React.FormEventHandler<HTMLFormElement>
const CreatePost: React.VFC<CreatePostProps> = ({ onFormSubmit, formRef }) => {
  return (
    <div className="create-post display-width">
      <h1 className="page-title">Create a Post</h1>
      <form ref={formRef} onSubmit={onFormSubmit}>
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
