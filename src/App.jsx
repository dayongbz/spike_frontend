import { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import Web3 from "web3";
import logo from "./img/logo.png";
import porfileInit from "./img/account_circle-24px.svg";

function App() {
  const [address, setAddress] = useState();

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider);
    web3.eth.getAccounts().then(setAddress);
  }, []);
  return (
    <div id="outer-wrapper">
      <div id="nav-wrapper">
        <img src={logo} width="66px" alt="logo" />
      </div>
      <div id="profile-wrapper">
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
    </div>
  );
}

export default App;
