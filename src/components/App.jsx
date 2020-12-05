import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import web3 from "../service/web3";
import Routes from "./Routes";
import Main from "./Main";
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
    <Router>
      <Switch>
        <Route path="/">
          <Main address={address} balance={balance} />
        </Route>
        <Route path="/intro"></Route>
      </Switch>
    </Router>
  );
}

export default App;
