import sendIcon from "../assets/img/send.svg";
import acceptIcon from "../assets/img/accept.svg";

function RecordList({ type, address, value }) {
  return (
    <div className="record-list">
      <div className="record">
        <div className="info">
          <img
            className="init"
            src={type === "send" ? acceptIcon : sendIcon}
            alt="profile"
            width="16px"
          />
          <p className="address">{address.substr(0, 20) + "..."}</p>
        </div>
        <div className="balance-info">
          <p className=" balance">
            <span className="type">ETH </span>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecordList;
