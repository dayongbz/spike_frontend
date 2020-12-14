import IntroMain from "./IntroMain";
import IntroUsername from "./IntroUsername";
import IntroEmail from "./IntroEmail";
import { useLocation } from "react-router-dom";

function Intro({ introData, setIntroData }) {
  let result;
  const path = useLocation().pathname;
  switch (path) {
    case "/intro":
      result = (
        <IntroMain
          introData={introData}
          setIntroData={setIntroData}
        ></IntroMain>
      );
      break;
    case "/intro/username":
      result = (
        <IntroUsername
          introData={introData}
          setIntroData={setIntroData}
        ></IntroUsername>
      );
      break;
    case "/intro/email":
      result = (
        <IntroEmail
          introData={introData}
          setIntroData={setIntroData}
        ></IntroEmail>
      );
      break;
    default:
      result = (
        <IntroMain
          introData={introData}
          setIntroData={setIntroData}
        ></IntroMain>
      );
      break;
  }

  console.log(path);
  return (
    <>
      <div id="intro-wrapper">{result}</div>
    </>
  );
}

export default Intro;
