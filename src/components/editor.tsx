//@ts-nocheck
import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData, ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import "../styles/editor.css";

interface EditorProps {
  onSave?: () => void;
}

export const Editor: React.VFC<EditorProps> = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS>();
  const savedDataRef = useRef<OutputData>();

  useEffect(() => {
    console.log(savedDataRef);
  }, [savedDataRef.current]);

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
      <button
        onClick={async () => {
          console.log(editorRef);
          if (editorRef.current !== undefined) {
            const data = await editorRef.current.save();
            console.log(data);
            savedDataRef.current = data;
          }
        }}
      >
        Save Data
      </button>
    </>
  );
};
