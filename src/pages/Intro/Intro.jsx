import { useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import IntroMain from "./IntroMain";
import IntroUsername from "./IntroUsername";
import IntroEmail from "./IntroEmail";
import IntroEmailVerify from "./IntroEmailVerify";
import IntroPassword from "./IntroPassword";
import IntroLogin from "./IntroLogin";

import StateContext from "../../context/StateContext";

function Intro() {
  const state = useContext(StateContext);
  const history = useHistory();
  useEffect(() => {
    if (state.user.username || state.user.address) {
      console.log("hello");
      history.push("/");
    }
  });
  let result;
  const path = useLocation().pathname;
  switch (path) {
    case "/intro":
      result = <IntroMain></IntroMain>;
      break;
    case "/intro/username":
      result = <IntroUsername></IntroUsername>;
      break;
    case "/intro/email":
      result = <IntroEmail></IntroEmail>;
      break;
    case "/intro/emailverify":
      result = <IntroEmailVerify></IntroEmailVerify>;
      break;
    case "/intro/password":
      result = <IntroPassword></IntroPassword>;
      break;
    case "/intro/login":
      result = <IntroLogin></IntroLogin>;
      break;
    default:
      result = <IntroMain></IntroMain>;
      break;
  }
  return (
    <>
      <div id="intro-wrapper">{result}</div>
    </>
  );
}

export default Intro;
