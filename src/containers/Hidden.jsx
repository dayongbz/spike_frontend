import { useState } from "react";

function Hidden({ children }) {
  const [text, setText] = useState("🔐 mouse over here 🔐");

  const onMouseEnter = () => {
    setText(children);
  };

  const onMouseLeave = () => {
    setText("🔐 mouse over here 🔐");
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden"
    >
      {text}
    </div>
  );
}

export default Hidden;
