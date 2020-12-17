import { useContext } from "react";

import StateContext from "../context/StateContext";

import RecordList from "./RecordList";

function RecordSlider({ height }) {
  const state = useContext(StateContext);
  return (
    <div
      id="record-slider"
      className="slider scrollbar"
      style={height && { height }}
    >
      {state.record?.map((val, index) => (
        <RecordList
          type={val.type}
          key={val + index}
          address={val.type === "receive" ? val.from : val.to}
          value={val.value}
        />
      ))}
    </div>
  );
}

export default RecordSlider;
