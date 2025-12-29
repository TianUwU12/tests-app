import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
// Компонент кнопки "Подняться вверх"
// Появляется после прокрутки страницы вниз на threshold пикселей
// При нажатии плавно поднимает страницу вверх

export default function ScrollToTopButton({
  threshold = 200, // после какого количества пикселей прокрутки показывать кнопку
  bottom = 24, // отступ кнопки снизу (px)
  right = 24, // отступ кнопки справа (px)
  size = 44, // размер кнопки (ширина и высота)
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
    width: `${size}px`,
    height: `${size}px`,
    opacity: visible ? 1 : 0,
  };

  return (
    <button
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={handleClick}
      style={style}
      className="scroll-btn"

      //   className={`
      //     fixed z-50 flex items-center justify-center
      //     rounded-full shadow-lg bg-white dark:bg-gray-800
      //     transition-all duration-300
      //     ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      //   `}
    >
      {/* SVG иконка «стрелка вверх» */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60%"
        height="60%"
        fill="none"
      >
        <path
          d="M6 15l6-6 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Up</span>
    </button>
  );
}
