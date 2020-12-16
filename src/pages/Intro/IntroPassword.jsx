import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroPassword({ introData, setIntroData }) {
  const [errMsg, setErrMsg] = useState("");
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const onChange = (event) => {
    if (
      event.target.value &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      )
    ) {
    }
    dispatch({ type: "SET_INTRO_PASSWORD", password: event.target.value });
  };

  const onClick = async (e) => {
    if (errMsg.length === "") {
      try {
        setErrMsg("");
        dispatch({
          type: "SET_MODAL",
          title: "Check your password",
          content: (
            <>
              Are you sure you want to use "
              <span className="main black">{state.intro.password}</span>"
            </>
          ),
          callback: history.push,
          param: ["/intro/email"],
        });
      } catch (error) {
        setErrMsg(error.response.data + " 😥");
      }
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <h1>
          Create <span className="main">Password</span>
        </h1>
        <p className="sub">for your wallet</p>
        <div className="sub-wrapper">
          <input
            type="password"
            id="password"
            className="sub rounded"
            onChange={onChange}
            placeholder="password"
          />
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <Button onClick={onClick} rounded="true">
          Finish
        </Button>
      </div>
    </>
  );
}

export default IntroPassword;
