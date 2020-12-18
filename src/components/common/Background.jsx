import { memo } from "react";
function Background({ children }) {
  return <div className="background-wrapper">{children}</div>;
}

export default memo(Background);
