import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function IntroEmail() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const onChange = (event) => {
    dispatch({ type: "SET_INTRO_EMAIL", email: event.target.value });
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
            type="text"
            id="email"
            className="sub rounded"
            onChange={onChange}
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/emailverify">
          <Button rounded="true">Verify email</Button>
        </Link>
      </div>
    </>
  );
}

export default IntroEmail;
