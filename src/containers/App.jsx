import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../pages/Main";
import Setting from "../pages/Setting";
import Record from "../pages/Record";
import Contact from "../pages/Contact";
import Intro from "../pages/Intro/Intro";
import Nav from "../components/common/Nav";
import "./reset.css";
import "./App.css";

function App() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [introData, setIntroData] = useState({});
  const [maxSize, setMaxSize] = useState({ width: 0, height: 0 });

  const onResize = () => {
    setMaxSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      id="root-wrapper"
      style={{ width: maxSize.width, height: maxSize.height }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <div id="outer-wrapper">
          <div id="cont-wrapper">
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
            <Route path="/intro">
              <Intro introData={introData} setIntroData={setIntroData}></Intro>
            </Route>
          </div>
          <Nav></Nav>
        </div>
      </Router>
    </div>
  );
}

export default App;
