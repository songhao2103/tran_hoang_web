import React, { useRef, useState, useEffect } from "react";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";

export const ResizableImageComponent = (props) => {
  const { node, updateAttributes, editor } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startW, setStartW] = useState(0);

  // khi attr width thay đổi (ví dụ qua undo/redo), cập nhật lại style
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.width = node.attrs.width || "auto";
    }
  }, [node.attrs.width]);

  const onMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!imgRef.current) return;
    setIsResizing(true);
    setStartX(e.clientX);
    setStartW(imgRef.current.offsetWidth);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isResizing || !imgRef.current) return;
    const delta = e.clientX - startX;
    const newW = Math.max(20, startW + delta);
    imgRef.current.style.width = `${newW}px`;
  };

  const onMouseUp = () => {
    if (isResizing && imgRef.current) {
      updateAttributes({ width: imgRef.current.style.width });
    }
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
    }
  }, [isResizing]);

  return (
    <NodeViewWrapper style={{ display: "inline-block", position: "relative" }}>
      <img
        ref={imgRef}
        src={node.attrs.src}
        alt={node.attrs.alt}
        style={{
          width: node.attrs.width || "auto",
          height: node.attrs.height || "auto",
          display: "block",
        }}
      />
      <span
        contentEditable={false}
        onMouseDown={onMouseDown}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 12,
          height: 12,
          background: "rgba(0,0,0,0.5)",
          cursor: "se-resize",
        }}
      />
    </NodeViewWrapper>
  );
};
