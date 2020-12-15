import { useContext } from "react";
import { Link } from "react-router-dom";

import MainButton from "../../components/common/MainButton";

import DispatchContext from "../../context/DispatchContext";

function IntroUsername() {
  const dispatch = useContext(DispatchContext);

  const onChange = (event) => {
    dispatch({ type: "SET_INTRO_USERNAME", username: event.target.value });
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
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/email">
          <MainButton rounded="true">Continue</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroUsername;
