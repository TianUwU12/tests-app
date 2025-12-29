export default function ExamCategory({
  bgColor = "yellow",
  title,
  description,
}) {
  return (
    <div style={{ backgroundColor: bgColor }}>
      {title}
      <p>{description ? description : "netu descriptiona"}</p>
      {description && <p>{description}</p>}
    </div>
  );
}


// ({username},i,originalArr)=>{}