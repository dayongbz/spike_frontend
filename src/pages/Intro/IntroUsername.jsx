import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import MainButton from "../../components/common/MainButton";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroUsername() {
  const [errMsg, setErrMsg] = useState("");
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const onChange = (e) => {
    dispatch({ type: "SET_INTRO_USERNAME", username: e.target.value });
  };

  const onClick = async (e) => {
    try {
      await axios.get(`/users/check?username=${state.intro.username}`);
      setErrMsg("");
      // history.push("/intro/email");
    } catch (error) {
      setErrMsg(error.response.data + " 😥");
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <h1>
          MAKE
          <br />
          <span className="main">Spike username</span>
        </h1>
        <div className="sub-wrapper">
          <label htmlFor="username" className="sub">
            spike.com/
          </label>
          <input
            type="text"
            id="username"
            className="sub rounded"
            onChange={onChange}
            style={{ width: "150px" }}
            placeholder="username"
          />
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <MainButton rounded="true" onClick={onClick}>
          Continue
        </MainButton>
      </div>
    </>
  );
}

export default IntroUsername;
