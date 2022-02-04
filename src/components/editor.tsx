//@ts-nocheck
import "../styles/editor.css";
import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData, ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";

interface EditorProps {
  editorRef: React.MutableRefObject<any>;
}

export const Editor: React.VFC<EditorProps> = ({ editorRef }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: wrapperRef.current!,
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a heading",
            levels: [1, 2, 3, 4],
            defaultLevel: 2,
          },
        },
        image: {
          class: Image,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
            },
          },
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
      },
    });

    return () => editorRef.current!.destroy();
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="editor-wrapper"></div>
    </>
  );
};
