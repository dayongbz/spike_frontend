import { useEffect, useContext } from "react";

import web3 from "../utils/web3";

import RecordSlider from "../components/RecordSlider";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";

import downArrow from "../assets/img/keyboard_arrow_down-24px.svg";

function Record() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch({ type: "RESET_RECORD" });
        dispatch({ type: "SET_LOADING" });
        const currentBlockNumber = await web3.eth.getBlockNumber();

        for (let i = currentBlockNumber; i > 0; i--) {
          const block = await web3.eth.getBlock(i, true);

          if (block.transactions.length > 0) {
            for (let item of block.transactions) {
              if (item.from === state.user.address) {
                dispatch({
                  type: "INSERT_RECORD",
                  record: {
                    from: item.from,
                    to: item.to,
                    value: web3.utils.fromWei(item.value),
                    type: "send",
                  },
                });
              } else if (item.to === state.user.address) {
                dispatch({
                  type: "INSERT_RECORD",
                  record: {
                    from: item.from,
                    to: item.to,
                    value: web3.utils.fromWei(item.value),
                    type: "receive",
                  },
                });
              }
            }
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    };

    fetch();
  }, []);
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
              <p className="balance">
                <span className="type">ETH </span>
                {state.user.balance}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="month-wrapper" className="wrapper">
        <div id="month">
          <p className="title">Decemder</p>
          <img
            className="downArrow"
            src={downArrow}
            alt="profile"
            width="32px"
          />
        </div>
        <div>
          <p id="expense-balance" className="balance">
            <span className="type">
              -
              {state.record.reduce(
                (acc, current) =>
                  current.type === "send" ? acc + Number(current.value) : acc,
                (0).toFixed(2)
              )}
              ETH
            </span>
          </p>

          <p id="profit-balance" className="balance">
            <span className="type">
              +
              {state.record
                .reduce(
                  (acc, current) =>
                    current.type !== "send" ? acc + Number(current.value) : acc,
                  0
                )
                .toFixed(2)}
              ETH
            </span>
          </p>
        </div>
      </div>

      <div id="record-wrapper" className="wrapper">
        <div id="search-wrapper">
          <input type="text" id="search-box"></input>
          {/* <img src={plusLogo} id="plus-button" alt="plus button" /> */}
        </div>
        <RecordSlider height="300px" />
      </div>
    </>
  );
}

export default Record;
