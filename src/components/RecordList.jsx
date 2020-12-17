import sendIcon from "../assets/img/send.svg";
import acceptIcon from "../assets/img/accept.svg";

function RecordList({ type }) {
  return (
    <div className="record-list">
      <div className="record">
        <div className="info">
          <img
            className="init"
            src={type === "send" ? sendIcon : acceptIcon}
            alt="profile"
            width="16px"
          />
          <p className="name ellip">이다용</p>
        </div>
        <div className="balance-info">
          <p className=" balance">
            <span className="type">ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecordList;
