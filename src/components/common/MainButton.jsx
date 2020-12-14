function MainButton({ rounded, children, onClick }) {
  return (
    <div
      className={rounded ? "rounded main-button" : "main-button"}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default MainButton;
