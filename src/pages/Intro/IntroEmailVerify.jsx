import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroEmailVerify() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    // axios.post("/emailverify", { email: state.intro.email });
  }, []);

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
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/password">
          <Button rounded="true">Continue</Button>
        </Link>
      </div>
    </>
  );
}

export default IntroEmailVerify;
