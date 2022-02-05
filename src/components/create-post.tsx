import React, { useRef } from "react";
import { PostProps } from "./view-post";
import { Editor } from "./editor";
import "../styles/create-post.css";
import EditorJS from "@editorjs/editorjs";

interface CreatePostProps {
  onFormSubmit: (post: PostProps) => void;
  nextPostId: string;
}

const CreatePost: React.VFC<CreatePostProps> = ({
  onFormSubmit,
  nextPostId,
}) => {
  const editorRef = useRef<EditorJS>();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="create-post display-width">
      <h1 className="page-title">Create a Post</h1>
      <form
        ref={formRef}
        onSubmit={async (ev) => {
          ev.preventDefault();
          const formData = new FormData(ev.currentTarget);
          const data = await editorRef.current!.save();
          onFormSubmit({
            id: nextPostId,
            title: formData.get("title") as string,
            content: data,
          });
          formRef.current!.reset();
          editorRef.current?.clear();
        }}
      >
        <label>Title:</label>
        <input name="title" placeholder="Enter Title" required />
        <label>Content:</label>
        <Editor editorRef={editorRef} />
        <button>Save Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
