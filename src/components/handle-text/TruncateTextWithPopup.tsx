import React, { useState, useRef, useEffect } from "react";

interface TruncateTextWithPopupProps {
  children: React.ReactNode;
  lines?: number;
  trigger?: "click" | "hover";
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
}

const TruncateTextWithPopup: React.FC<TruncateTextWithPopupProps> = ({
  children,
  lines = 2,
  trigger = "click",
  className = "",
  placement = "bottom",
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup && trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup, trigger]);

  // Xử lý style popup theo placement
  const getPopupPosition = () => {
    switch (placement) {
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2";
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2";
      default:
        return "top-full mt-2 left-1/2 -translate-x-1/2";
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={() => trigger === "click" && setShowPopup((prev) => !prev)}
      onMouseEnter={() => trigger === "hover" && setShowPopup(true)}
      onMouseLeave={() => trigger === "hover" && setShowPopup(false)}
      className={`relative inline-block ${className}`}
    >
      <div
        className="cursor-pointer"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {children}
      </div>

      {showPopup && (
        <div
          className={`absolute z-20 bg-white text-sm p-3 shadow-lg border rounded max-w-[300px] w-max transition-all ${getPopupPosition()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default TruncateTextWithPopup;
