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
    // const web3 = new Web3(Web3.givenProvider);
    web3.eth.getAccounts().then((result) => {
      console.log(result);
      setAddress(result[0]);
      web3.eth.getBalance(result[0]).then(setBalance);
    });
  }, []);
  return (
    <div id="outer-wrapper">
      <Router>
        <Switch>
          <div id="cont-wrapper">
            <Route exact path="/">
              <Main eaddress={address} balance={balance} />
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/record">
              <Record></Record>
            </Route>
            <Route path="/setting">
              <Setting></Setting>
            </Route>
            <Route path="/intro"></Route>
          </div>
        </Switch>
        <Nav></Nav>
      </Router>
    </div>
  );
}

export default App;
