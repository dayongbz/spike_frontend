import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";

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
          <Button rounded="true">Create new wallet</Button>
        </Link>
      </div>
    </>
  );
}

export default IntroMain;
