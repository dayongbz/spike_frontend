import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

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
    if (
      state.intro.username &&
      /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
        state.intro.username
      )
    ) {
      try {
        await axios.get(`/users/check?username=${state.intro.username}`);
        setErrMsg("");
        dispatch({
          type: "SET_MODAL",
          title: "Check your username",
          content: (
            <>
              Are you sure you want to use "
              <span className="main black">{state.intro.username}</span>"
            </>
          ),
          callback: history.push,
          param: ["/intro/email"],
        });
      } catch (error) {
        setErrMsg(error.response.data + " 😥");
      }
    } else {
      setErrMsg("To be 8 ~ 20 lengths with alphabets and numbers 😥");
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
          <input
            type="username"
            id="username"
            className="sub rounded"
            onChange={onChange}
            // style={{ width: "150px" }}
            placeholder="username"
          />
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <Button rounded="true" onClick={onClick}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default IntroUsername;
