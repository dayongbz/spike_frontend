import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "../components/common/Button";
import Elips from "../components/common/Elips";
import RecordSlider from "../components/RecordSlider";
import ContactSlider from "../components/ContactSlider";
import Balance from "../components/common/Balance";

import StateContext from "../context/StateContext";

import logo from "../assets/img/logo.png";
import porfileInit from "../assets/img/account_circle-24px.svg";
import etherLogoCircle from "../assets/img/ether.png";

function Main() {
  const state = useContext(StateContext);
  const history = useHistory();
  const onClick = () => {
    history.push("/send");
  };

  return (
    <>
      <div id="nav-wrapper">
        <img src={logo} width="66px" alt="logo" />
      </div>

      <div id="profile-wrapper" className="wrapper">
        <div id="profile-sub-wrapper">
          <img
            className="profile-init "
            width="66px"
            src={porfileInit}
            alt="profile"
          />
          <div id="profile-info">
            <p className="name">{state.user.username || "Please login"}</p>
            <p className="address">
              <Elips>{state.user.address || "Please login"}</Elips>
            </p>
          </div>
        </div>

        <div id="wallet-slider">
          <div className="wallet-card">
            <div className="top">
              <img src={etherLogoCircle} alt="" width="50px" />
              <div className="balance-info">
                <Balance value={state.user.balance || 0}></Balance>
              </div>
            </div>
            <Button rounded="true" onClick={onClick}>
              Send
            </Button>
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
