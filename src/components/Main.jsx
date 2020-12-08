import logo from "../img/logo.png";
import porfileInit from "../img/account_circle-24px.svg";
import etherLogoCircle from "../img/ether.png";
import homeLogo from "../img/home-24px.svg";
import contactsLogo from "../img/people-24px.svg";
import recordLogo from "../img/article-24px.svg";
import settingLogo from "../img/settings-24px.svg";

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

      <div id="contacts-wrapper" className="wrapper">
        <p className="title">Contacts</p>

        <div id="contacts-slider" className="slider">
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

      <div id="button-wrapper" className="button-wrapper">

        <button type= "button" id="logo-button" className= "logo-button"><img className ="home-logo" src={homeLogo}alt="logo" width ="40px" ></img>
        <p className = "logo-title" id= "home-title">HOME</p>
        </button>

        <button type= "button" id="logo-button" className= "logo-button"><img className ="contacts-logo"src={contactsLogo}alt="logo" width ="40px"></img>
        <p className = "logo-title" id= "contacts-title">CONTACT</p>
        </button>

        <button type= "button" id="logo-button" className= "logo-button"><img className ="record-logo"src={recordLogo}alt="logo" width ="40px"></img>
        <p className = "logo-title" id= "record-title">RECORD</p>
        </button>

        <button type= "button" id="logo-button" className= "logo-button"><img className ="setting-logo"src={settingLogo}alt="logo" width ="40px"></img>
        <p className = "logo-title" id= "setting-title">SETTING</p>
        </button>
      </div>
    </div>
  );
}

export default Main;
