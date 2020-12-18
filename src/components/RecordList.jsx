import { useContext } from "react";
import Tooltip from "rc-tooltip";

import Elips from "./common/Elips";
import StateContext from "../context/StateContext";

import sendIcon from "../assets/img/send.svg";
import acceptIcon from "../assets/img/accept.svg";
import Balance from "./common/Balance";

function RecordList({ type, address, value }) {
  const state = useContext(StateContext);

  return (
    <div className="record-list">
      <div className="record">
        <Tooltip overlay={address} placement="topLeft" trigger={["click"]}>
          <div className="info">
            <img
              className="init"
              src={type === "send" ? acceptIcon : sendIcon}
              alt="profile"
              width="16px"
            />
            {state.contact?.find((ele) => ele.address === address)
              ?.friendUsername || (
              <p className="address">
                <Elips>{address}</Elips>
              </p>
            )}
          </div>
        </Tooltip>
        <div className="balance-info">
          <Balance value={Number(value)} />
        </div>
      </div>
    </div>
  );
}

export default RecordList;
