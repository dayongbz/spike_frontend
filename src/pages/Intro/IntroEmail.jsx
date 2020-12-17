import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroEmail() {
  const [errMsg, setErrMsg] = useState("");
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const onChange = (event) => {
    dispatch({ type: "SET_INTRO_EMAIL", email: event.target.value });
  };

  const onClick = async (e) => {
    if (
      state.intro.email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.intro.email)
    ) {
      try {
        await axios.get(`/users/check?email=${state.intro.email}`);
        setErrMsg("");
        dispatch({
          type: "SET_MODAL",
          title: "Check your email",
          content: (
            <>
              Are you sure you want to use "
              <span className="main black">{state.intro.email}</span>"
            </>
          ),
          callback: history.push,
          param: ["/intro/emailverify"],
        });
      } catch (error) {
        setErrMsg(error.response.data + " 😥");
      }
    } else {
      setErrMsg("Please enter a valid email 😥");
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <p className="sub">
          🎉WELCOME <span className="main">{state.intro.username}</span>🎉
        </p>
        <h1>
          Enter <span className="main">Your email</span>
        </h1>
        <div className="sub-wrapper">
          <input
            type="email"
            id="email"
            className="sub rounded"
            onChange={onChange}
            placeholder="email@example.com"
          />
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <Button onClick={onClick} borderRadius="100px">
          Verify email
        </Button>
      </div>
    </>
  );
}

export default IntroEmail;
