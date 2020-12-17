import Elips from "./common/Elips";

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
          <p className="address">
            <Elips>{address}</Elips>
          </p>
        </div>
        <div className="balance-info">
          <p className=" balance">
            <span className="type">ETH </span>
            {Number(value)?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecordList;
