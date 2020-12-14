import { Link } from "react-router-dom";
import MainButton from "../../components/common/MainButton";

function IntroEmail({ introData, setIntroData }) {
  const onChange = (event) => {
    setIntroData({ ...introData, email: event.target.value });
  };
  return (
    <>
      <div className="main-wrapper">
        <h1>
          Enter
          <br />
          <span className="main">Your email</span>
        </h1>
        <div className="sub-wrapper">
          <input
            type="text"
            id="email"
            className="sub rounded"
            onChange={onChange}
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/username">
          <MainButton rounded="true">Verify email</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroEmail;
