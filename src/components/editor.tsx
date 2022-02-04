import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../plugins/editor-tools";
import "../styles/code-box.css";

interface EditorProps {
  editorRef: React.MutableRefObject<any>;
}

export const Editor: React.VFC<EditorProps> = ({ editorRef }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: wrapperRef.current!,
      placeholder: "start creating by clicking within the box and selecting +",
      tools: tools,
    });

    return () => editorRef.current!.destroy();
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="editor-wrapper"></div>
    </>
  );
};
