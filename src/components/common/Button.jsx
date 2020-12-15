function MainButton({
  rounded,
  width = "100%",
  height = "auto",
  fontSize = "1.1rem",
  backgroundColor = "#00ff94",
  color = "#1f1f1f",
  children,
  onClick,
  type = "main",
}) {
  if (type === "sub") {
    backgroundColor = "#999999";
    color = "#f6f6f6f6";
  }
  return (
    <div
      className={rounded ? "rounded button" : "button"}
      onClick={onClick}
      style={{ width, height, fontSize, backgroundColor, color }}
    >
      {children}
    </div>
  );
}

export default MainButton;
