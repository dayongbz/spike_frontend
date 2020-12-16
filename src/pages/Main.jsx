import logo from "../assets/img/logo.png";
import porfileInit from "../assets/img/account_circle-24px.svg";
import etherLogoCircle from "../assets/img/ether.png";

function Main(props) {
  const { address, balance } = props;
  return (
    <>
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
            <button>Send</button>
          </div>

        </div>
      </div>

      <div id="contacts-wrapper" className="wrapper">
        <p className="title">Contacts</p>

        <div id="contacts-slider" className="slider scrollbar">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val) => (
            <div key={val} id="contacts-list">
              <img
                className="contacts-init"
                src={porfileInit}
                alt="profile"
                width="30px"
              />
              <div id="contacts-info">
                <p className="name ellip">Anonymous</p>
                <p className="address ellip">
                  {address ? address : "can't find address"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="record-wrapper" className="wrapper">
        <p className="title">Record</p>

        <div id="record-slider" className="slider scrollbar">
          <div id="send-record" className="record">
            <img
                className="send-init"
                src={porfileInit}
                alt="profile"
                width="30px"
              />
              <div id="send-info">
                <p className="name ellip">이다용</p>
              </div>
              <div id= "send-balanceInfo" className="balanceInfo">
                <p id= "send-balance" className="balance">
                  <span className="type">ETH</span>
                  {balance}
                </p>
                <p id= "send-dollar" className="dollar">${balance * 575}</p>
              </div>
          </div>

          <div id="accept-record" className="record">
            <img
                className="accept-init"
                src={porfileInit}
                alt="profile"
                width="30px"
              />
              <div id="accept-info">
              <p className="address ellip">
                  {address ? address : "can't find address"}
                </p>
              </div>
              <div id= "accept-balanceInfo" className="balanceInfo">
                <p id= "accept-balance" className="balance">
                  <span className="type">ETH</span>
                  {balance}
                </p>
                <p id= "accept-dollar" className="dollar">${balance * 575}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
