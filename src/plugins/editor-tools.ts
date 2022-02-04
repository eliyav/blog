import Header from "@editorjs/header";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Embed from "@editorjs/embed";
import CodeBox from "@bomdi/codebox";
import Warning from "@editorjs/warning";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";

export const tools: { [toolName: string]: ToolConstructable | ToolSettings } = {
  header: {
    class: Header as unknown as ToolConstructable,
    inlineToolbar: true,
    config: {
      placeholder: "Enter a heading",
      levels: [1, 2, 3, 4],
      defaultLevel: 2,
    },
  },
  codeBox: {
    class: CodeBox,
    config: {
      themeURL: CodeBox,
      themeName: "atom-one-dark",
      useDefaultTheme: "dark",
    },
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
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  image: {
    class: Image,
    inlineToolbar: true,
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
};
