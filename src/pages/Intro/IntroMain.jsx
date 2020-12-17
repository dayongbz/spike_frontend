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
          <Button borderRadius="100px" margin="0 0 10px 0">
            Create new wallet
          </Button>
        </Link>
        <Link to="/intro/login">
          <Button borderRadius="100px" backgroundColor="#333" color="#cccccc">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}

export default IntroMain;
