import styles from "./QuestionLevel.module.css";

const levels = {
  easy: "Лёгкий",
  middle: "Средний",
  hard: "Сложный",
};
const levelColors = {
  easy: { bgColor: "rgba(80, 194, 88, 0.64)", borderColor: "rgb(55, 165, 62)" },
  middle: {
    bgColor: "rgba(199, 160, 45, 0.7)",
    borderColor: "rgba(156, 126, 36, 1)",
  },
  hard: { bgColor: "rgba(194, 80, 80, 0.72)", borderColor: "rgba(165, 55, 55, 1)" },
};

const getLvlColors = (lvl) => levelColors[lvl];

export default function QuestionLevel({ level }) {
  const { bgColor, borderColor } = getLvlColors(level);
  return (
    <span
      className={styles.lvl}
      style={{ backgroundColor: bgColor, borderColor }}
    >
      {levels[level]}
    </span>
  );
}
