import Button from "../components/common/Button";
import RecordSlider from "../components/RecordSlider";

import logo from "../assets/img/logo.png";
import porfileInit from "../assets/img/account_circle-24px.svg";
import etherLogoCircle from "../assets/img/ether.png";
import ContactSlider from "../components/ContactSlider";

function Main(props) {
  const { address } = props;
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
              <div className="balance-info">
                <p className="balance">
                  <span className="type">ETH</span>
                </p>
              </div>
            </div>
            <Button rounded="true">Send</Button>
          </div>
        </div>
      </div>

      <div id="contacts-wrapper" className="wrapper">
        <p className="title">Contacts</p>
        <ContactSlider height="300px" />
      </div>

      <div id="record-wrapper" className="wrapper">
        <p className="title">Record</p>
        <RecordSlider height="300px" />
      </div>
    </>
  );
}

export default Main;
