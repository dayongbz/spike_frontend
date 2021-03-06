function MainButton({
  borderRadius = "0",
  width = "100%",
  height = "auto",
  fontSize = "1.1rem",
  backgroundColor = "#00ff94",
  color = "#1f1f1f",
  children,
  onClick,
  type = "main",
  margin = "0",
  padding = "10px",
}) {
  if (type === "sub") {
    backgroundColor = "#363636";
    color = "#888888";
  }
  return (
    <div
      className="button"
      onClick={onClick}
      style={{
        width,
        height,
        fontSize,
        backgroundColor,
        color,
        margin,
        padding,
        borderRadius,
      }}
    >
      {children}
    </div>
  );
}

export default MainButton;
