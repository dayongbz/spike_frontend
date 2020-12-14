import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import web3 from "../service/web3";
import Main from "./Main";
import Setting from "./Setting";
import Record from "./Record";
import Contact from "./Contact";
import Nav from "./Nav";
import "./reset.css";
import "./App.css";

function App() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    web3.eth.getAccounts().then((result) => {
      console.log(result[0]);
      setAddress(result[0]);
      web3.eth.getBalance(result[0]).then(setBalance);
    });
  }, []);
  return (
    <div id="outer-wrapper">
      <Router>
        <div id="cont-wrapper">
          <Switch>
            <Route exact path="/">
              <Main address={address} balance={balance} />
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/record">
              <Record address={address} balance={balance}></Record>
            </Route>
            <Route path="/setting">
              <Setting></Setting>
            </Route>
            <Route path="/intro"></Route>
          </Switch>
        </div>
        <Nav></Nav>
      </Router>
    </div>
  );
}

export default App;
