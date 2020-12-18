import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import web3 from "../utils/web3";

import ContactSearch from "../containers/ContactSearch";
import Button from "../components/common/Button";

import leftArrow from "../assets/img/keyboard_arrow_left-24px.svg";

function Send() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();
  const [maxValue, setMaxValue] = useState("");
  const [valErrMsg, setValErrMsg] = useState("");
  const [addErrMsg, setAddErrMsg] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(
        "/ether/send?to=0xF44bE481CB4d3D1DAECAB83BbD15bEf415397B6C&value=10000000000",
        { withCredentials: true }
      );
      const max = Number(state.user.balance) - Number(result.data.price);
      if (max > 0 && max < Number(state.user.balance)) {
        setMaxValue(max);
      } else {
        setMaxValue(0);
      }
    };
    fetch();
  }, [state.user.balance]);

  const onClick = async () => {
    let status = 0;

    if (web3.utils.isAddress(state.send.to)) {
      setAddErrMsg("");
    } else {
      setAddErrMsg("❌ Please put a valid address ❌");
      status++;
    }

    if (state.send.value > maxValue) {
      setValErrMsg(`❌ You can send up to ${maxValue} ❌`);
      status++;
    } else {
      setValErrMsg("");
    }

    if (status === 0) {
      try {
        dispatch({ type: "SET_LOADING" });
        await axios.post(
          "/ether/send",
          { to: state.send.to, value: state.send.value },
          {
            withCredentials: true,
          }
        );
        dispatch({
          type: "SET_MODAL",
          title: "Success",
          content: (
            <>
              You sent <span className="main">{state.send.value}</span> to{" "}
              {<span className="address main">{state.send.to}</span>}
            </>
          ),
          callback: history.goBack,
          only: true,
        });

        const balance = await axios.get("/ether/balance", {
          withCredentials: true,
        });
        dispatch({ type: "SET_BALANCE", balance: balance.data });
        dispatch({ type: "RESET_SEND" });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    }
  };

  const onChangeVal = (e) => {
    if (e.target.value > maxValue) {
      dispatch({ type: "SET_SEND_VALUE", value: maxValue });
    } else {
      dispatch({ type: "SET_SEND_VALUE", value: e.target.value });
    }
  };

  const onChangeAddress = (e) => {
    dispatch({ type: "SET_SEND_ADDRESS", address: e.target.value });
  };

  const onClickPrev = () => {
    history.goBack();
  };

  return (
    <>
      <div id="nav-wrapper">
        <div id="title">Send</div>
        <div id="arrow-wrapper">
          <img
            onClick={onClickPrev}
            id="left-arrow"
            src={leftArrow}
            width="50px"
            alt="prev"
          />
        </div>
      </div>
      <div id="send-wrapper">
        <input
          type="number"
          placeholder="Enter the Value"
          className="send-input"
          onChange={onChangeVal}
          min="0"
          max={maxValue}
          step="0.1"
          value={state.send.value}
        ></input>
        <p className="err-msg">{valErrMsg}</p>
        <input
          className="send-input address"
          type="text"
          placeholder="address"
          onChange={onChangeAddress}
          value={state.send.to}
        />
        <p className="err-msg">{addErrMsg}</p>
      </div>
      <ContactSearch button={false} height="300px" />
      <Button onClick={onClick} borderRadius="100px" margin="30px 0">
        Send
      </Button>
    </>
  );
}

export default Send;
