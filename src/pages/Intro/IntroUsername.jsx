import { Link } from "react-router-dom";
import MainButton from "../../components/common/MainButton";

function IntroUsername({ introData, setIntroData }) {
  const onChange = (event) => {
    setIntroData({ ...introData, username: event.target.value });
  };
  return (
    <>
      <div className="main-wrapper">
        <h1>
          MAKE
          <br />
          <span className="main">Spike username</span>
        </h1>
        <div className="sub-wrapper">
          <label htmlFor="username" className="sub">
            spike.com/
          </label>
          <input
            type="text"
            id="username"
            className="sub rounded"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="sub-wrapper">
        <Link to="/intro/username">
          <MainButton rounded="true">Continue</MainButton>
        </Link>
      </div>
    </>
  );
}

export default IntroUsername;
