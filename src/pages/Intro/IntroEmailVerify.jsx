import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroEmailVerify() {
  const [errMsg, setErrMsg] = useState("");
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios.post("/emailverify", { email: state.intro.email });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const onClick = async (e) => {
    try {
      await axios.get(`/emailverify?email=${state.intro.email}`);
      setErrMsg("");
      dispatch({ type: "SET_INTRO_EMAILVERIFY" });
      history.push("/intro/password");
    } catch (error) {
      setErrMsg("You have to verify your email. 😥");
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <h1>
          <span className="main">{state.intro.email}</span>
        </h1>
        <div className="sub-wrapper">
          <p className="sub">
            Please click the link in the email <br />
            to approve the request
          </p>
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <Button onClick={onClick} rounded="true">
          Continue
        </Button>
      </div>
    </>
  );
}

export default IntroEmailVerify;
