import { useContext } from "react";

import RecordSlider from "../components/RecordSlider";
import StateContext from "../context/StateContext";

import sendIcon from "../assets/img/send.svg";
import acceptIcon from "../assets/img/accept.svg";
import Balance from "../components/common/Balance";

function Record() {
  const state = useContext(StateContext);

  return (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Record</p>
        </div>
      </div>
      <div id="holdings-wrapper" className="wrapper">
        <p className="title">Holdings</p>
        <div className="info">
          <div className="top">
            <div className="balance-info">
              <Balance value={state.user.balance || 0} />
            </div>
          </div>
        </div>
      </div>

      <div id="month-wrapper" className="wrapper">
        <div id="month">
          <p className="title">Decemder</p>
        </div>
        <div>
          <p id="expense-balance" className="balance">
            <span className="type">
              <img
                className="init"
                src={acceptIcon}
                alt="profile"
                width="16px"
              />
              <Balance
                value={state.record.reduce(
                  (acc, current) =>
                    current.type === "send" ? acc + Number(current.value) : acc,
                  0
                )}
              />
            </span>
          </p>

          <p id="profit-balance" className="balance">
            <span className="type">
              <img className="init" src={sendIcon} alt="profile" width="16px" />

              <Balance
                value={state.record.reduce(
                  (acc, current) =>
                    current.type !== "send" ? acc + Number(current.value) : acc,
                  0
                )}
              />
            </span>
          </p>
        </div>
      </div>

      <div id="record-wrapper" className="wrapper">
        <div id="search-wrapper">
          <input type="text" id="search-box"></input>
        </div>
        <RecordSlider height="300px" />
      </div>
    </>
  );
}

export default Record;
