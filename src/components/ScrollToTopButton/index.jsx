import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({
  threshold = 200, // после какого количества пикселей прокрутки показывать кнопку
  bottom = 24, // отступ кнопки снизу (px)
  right = 24, // отступ кнопки справа (px)
  ariaLabel = "Подняться вверх",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    // Проверка положения скролла
    const checkScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrolled > threshold);
      ticking = false;
    };

    // Обработчик скролла с оптимизацией с помощью requestAnimationFrame
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Проверяем сразу — вдруг пользователь уже проскроллил страницу
    checkScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // Действие при нажатии
  const handleClick = () => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Учитываем системные настройки плавной анимации
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setVisible(false);
  };

  if (!visible) return <></>;

  // Стиль расположения кнопки
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
