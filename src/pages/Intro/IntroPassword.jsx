import { useContext } from "react";
import { Link } from "react-router-dom";

import MainButton from "../../components/common/MainButton";

import DispatchContext from "../../context/DispatchContext";

function IntroPassword({ introData, setIntroData }) {
  const dispatch = useContext(DispatchContext);

  const onChange = (event) => {
    dispatch({ type: "SET_INTRO_PASSWORD", password: event.target.value });
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
      </div>
      <div className="sub-wrapper">
        <Link to="/">
          <MainButton rounded="true">Finish</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroPassword;
