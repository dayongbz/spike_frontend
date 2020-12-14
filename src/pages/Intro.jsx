import logo from "../assets/img/logo.png";

function Intro() {
  return (
    <>
      <img src={logo} alt="logo" width="200px" />
      <div id="rounded-button">Create new wallet</div>
    </>
  );
}

export default Intro;
