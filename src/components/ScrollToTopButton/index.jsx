import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({
  threshold = 200,
  bottom = 24,
  right = 24,
  ariaLabel = "Подняться вверх",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const checkScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrolled > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    checkScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setVisible(false);
  };

  if (!visible) return <></>;

  const style = {
    bottom: `${bottom}px`,
    right: `${right}px`,

    opacity: visible ? 1 : 0,
  };

  return (
    <button
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={handleClick}
      style={style}
      className="scroll-btn"
    >
      <FaArrowUp />
      <span>Up</span>
    </button>
  );
}
