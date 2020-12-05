import logo from "../img/logo.png";
import porfileInit from "../img/account_circle-24px.svg";
import etherLogoCircle from "../img/ether.png";

function Main(props) {
  const { address, balance } = props;
  return (
    <div id="outer-wrapper">
      <div id="nav-wrapper">
        <img src={logo} width="66px" alt="logo" />
      </div>
      <div id="profile-wrapper" className="wrapper">
        <div id="profile-sub-wrapper">
          <img className="profile-init" src={porfileInit} alt="profile" />
          <div id="profile-info">
            <p className="name ellip">Anonymous</p>
            <p className="address ellip">
              {address ? address : "can't find address"}
            </p>
          </div>
        </div>
        <button>Send</button>
      </div>
      <div id="wallet-wrapper" className="wrapper">
        <p className="title">Wallet</p>
        <div id="wallet-slider">
          <div className="wallet-card">
            <div className="top">
              <img src={etherLogoCircle} alt="" width="50px" />
              <div className="balanceInfo">
                <p className="balance">
                  <span className="type">ETH</span>
                  {balance}
                </p>
                <p className="dollar">${balance * 575}</p>
              </div>
            </div>
            <p className="address ellip">{address}</p>
          </div>
          <div className="wallet-card">
            <div className="top">
              <img src={etherLogoCircle} alt="" width="50px" />
              <div className="balanceInfo">
                <p className="balance">
                  <span className="type">ETH</span>
                  {balance}
                </p>
                <p className="dollar">${balance * 575}</p>
              </div>
            </div>
            <p className="address ellip">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
