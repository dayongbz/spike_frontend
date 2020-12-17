import RecordList from "./RecordList";
function RecordSlider({ height }) {
  return (
    <div
      id="record-slider"
      className="slider scrollbar"
      style={height && { height }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) =>
        val % 2 === 0 ? (
          <RecordList type="send" key={val} />
        ) : (
          <RecordList type="accept" key={val} />
        )
      )}
    </div>
  );
}

export default RecordSlider;
