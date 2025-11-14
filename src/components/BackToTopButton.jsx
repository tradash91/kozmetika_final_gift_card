import { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Figyeli a scroll pozíciót
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Görgetés a tetejére
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            zIndex: 88,
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            fontSize: "18px",
            border: "none",

            cursor: "pointer",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer", fill: "white" }}
          >
            <circle cx="24" cy="24" r="22" fill="#2d2d33" />
            <path
              d="M24 16 L16 24 L18.2 26.2 L22 22.4 V34 H26 V22.4 L29.8 26.2 L32 24 Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
