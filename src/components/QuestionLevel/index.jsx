import styles from "./QuestionLevel.module.css";

const levels = {
  easy: "Legkiy",
  middle: "Sredniy",
  hard: "Tyzheliy",
  extreme: "Ekstremalniy",
  insane: "Sovsem Beda",
};
const levelColors = {
  easy: { bgColor: "rgb(80, 194, 87)", borderColor: "rgb(55, 165, 62)" },
  middle: {
    bgColor: "rgb(199, 161, 45)",
    borderColor: "rgba(156, 126, 36, 1)",
  },
  hard: { bgColor: "rgb(80, 194, 87)", borderColor: "rgb(55, 165, 62)" },
  extreme: { bgColor: "rgb(80, 194, 87)", borderColor: "rgb(55, 165, 62)" },
  insane: { bgColor: "rgb(80, 194, 87)", borderColor: "rgb(55, 165, 62)" },
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
