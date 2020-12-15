import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import MainButton from "../../components/common/MainButton";

import DispatchContext from "../../context/DispatchContext";

import logo from "../../assets/img/logo.png";

function IntroMain() {
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    dispatch({ type: "RESET_INTRO" });
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <img src={logo} alt="logo" width="200px" />
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/username">
          <MainButton rounded="true">Create new wallet</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroMain;
