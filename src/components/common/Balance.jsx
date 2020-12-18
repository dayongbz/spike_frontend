import Tooltip from "rc-tooltip";

function Balance({ value }) {
  return (
    <Tooltip overlay={value} placement="topRight" trigger={["click"]}>
      <p className="balance">
        <span className="type">ETH </span>
        {value?.toFixed(2)}
      </p>
    </Tooltip>
  );
}

export default Balance;
