import { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../pages/Main";
import Setting from "../pages/Setting";
import Record from "../pages/Record";
import Contact from "../pages/Contact";
import Intro from "../pages/Intro/Intro";
import Nav from "../components/common/Nav";

import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";

import "./reset.css";
import "./App.css";

function App() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onResize = () => {
    dispatch({
      type: "SET_SCREEN_SIZE",
      size: [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ],
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
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div
          id="root-wrapper"
          style={{
            width: `${state.screenSize[0]}px`,
            height: `${state.screenSize[1]}px`,
          }}
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
                  <Intro></Intro>
                </Route>
              </div>
              <Nav></Nav>
            </div>
          </Router>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
