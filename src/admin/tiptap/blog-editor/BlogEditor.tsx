import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { Underline } from "../extentions/Underline";
import { Color } from "../extentions/Colors";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "../extentions/FontSize";
import { Image } from "../extentions/Image";
import { useEffect } from "react";
import { ResizableImage } from "../extentions/ResizableImage";
// import FontFamily from "@tiptap/extension-font-family";
// import Image from "@tiptap/extension-image";

const FullTiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      ResizableImage,
      //   FontFamily,
      FontSize,
      Image,
    ],
    content: "<p>Chào mừng đến với Tiptap Editor! 😎</p>",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;

    const tempUrl = URL.createObjectURL(file);

    editor.chain().focus().setImage({ src: tempUrl, alt: file.name }).run();
  };
  useEffect(() => {
    if (!editor) return;
    const editorEl = editor.view.dom as HTMLElement;

    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    let currentImg: HTMLImageElement | null = null;

    const onMouseDown = (e: MouseEvent) => {
      const handle = (e.target as HTMLElement).closest(".resize-handle");
      if (!handle) return;

      currentImg = handle.parentElement?.querySelector("img") ?? null;
      if (!currentImg) return;

      isResizing = true;
      startX = e.clientX;
      startWidth = currentImg.offsetWidth;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing || !currentImg) return;
      const delta = e.clientX - startX;
      const newWidth = Math.max(20, startWidth + delta);
      currentImg.style.width = `${newWidth}px`;
    };

    const onMouseUp = () => {
      if (isResizing && currentImg) {
        // Lấy pos của <img> trong doc
        const pos = editor.view.posAtDOM(currentImg, 0);
        const newWidth = currentImg.style.width;

        if (typeof pos === "number") {
          editor
            .chain()
            .focus()
            .setTextSelection({ from: pos, to: pos + 1 })
            .updateAttributes("resizableImage", {
              ...editor.getAttributes("resizableImage"),
              width: newWidth,
            })
            .run();
        }
      }

      isResizing = false;
      currentImg = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    editorEl.addEventListener("mousedown", onMouseDown);
    return () => {
      editorEl.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [editor]);

  return (
    <div className="rounded-md border bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 border-b bg-gray-50">
        {/* FONT SIZE */}
        <select
          onChange={(e) =>
            editor?.chain().focus().setFontSize(e.target.value).run()
          }
          className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {[
            "10px",
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "28px",
            "32px",
          ].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* COLOR */}
        <input
          type="color"
          onChange={(e) =>
            editor?.chain().focus().setColor(e.target.value).run()
          }
          className="w-8 h-8 border cursor-pointer"
          title="Chọn màu chữ"
        />

        {/* FONT STYLE BUTTONS */}
        <div className="flex gap-1">
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className="px-2 py-1 rounded font-bold hover:bg-gray-200 active:bg-gray-300"
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className="px-2 py-1 rounded italic hover:bg-gray-200 active:bg-gray-300"
            title="Italic"
          >
            I
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className="px-2 py-1 rounded underline hover:bg-gray-200 active:bg-gray-300"
            title="Underline"
          >
            U
          </button>
        </div>

        {/* Chọn ảnh */}
        <label className="inline-block cursor-pointer px-3 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
          Chọn ảnh
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Editor content */}
      <div
        className="p-4 min-h-[200px] focus:outline-none prose prose-sm max-w-none"
        onClick={() => editor?.chain().focus().run()}
      >
        <EditorContent
          editor={editor}
          className="outline-none [&_.ProseMirror]:outline-none"
        />
      </div>
    </div>
  );
};

export default FullTiptapEditor;
