import IntroMain from "./IntroMain";
import IntroUsername from "./IntroUsername";
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
