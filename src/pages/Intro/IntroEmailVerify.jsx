import { Link } from "react-router-dom";
import MainButton from "../../components/common/MainButton";

function IntroEmailVerify({ introData, setIntroData }) {
  return (
    <>
      <div className="main-wrapper">
        <h1>
          <span className="main">{introData.email}</span>
        </h1>
        <div className="sub-wrapper">
          <p className="sub">
            Please click the link in the email <br />
            to approve the request
          </p>
        </div>
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/password">
          <MainButton rounded="true">Continue</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroEmailVerify;
