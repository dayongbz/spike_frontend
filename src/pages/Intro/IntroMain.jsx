import logo from "../../assets/img/logo.png";
import MainButton from "../../components/common/MainButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function IntroMain({ introData, setIntroData }) {
  useEffect(() => {
    setIntroData({});
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
