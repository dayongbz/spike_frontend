import { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Main from "../pages/Main";
import Setting from "../pages/Setting";
import Record from "../pages/Record";
import Contact from "../pages/Contact";
import Intro from "../pages/Intro/Intro";
import EmailVerify from "../pages/EmailVerify";
import Send from "../pages/Send";

import Nav from "../components/common/Nav";
import Modal from "../components/common/Modal";
import Loader from "../components/common/Loader";
import Background from "../components/common/Background";

import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";

import "./reset.css";
import "./loader.css";
import "./App.css";

function App() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  axios.defaults.baseURL = "https://api.dayong.xyz";

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
    axios.post(
      "/login",
      { username: "", password: "" },
      { withCredentials: true }
    );
    axios.get("/login", { withCredentials: true });
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
              <div id="cont-wrapper" className="scrollbar">
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
                  <Setting />
                </Route>
                <Route path="/intro">
                  <Intro />
                </Route>
                <Route path="/emailverify">
                  <EmailVerify />
                </Route>
                <Route path="/send">
                  <Send/>
                </Route>
              </div>
              <Nav></Nav>
              {state.modal.title && state.modal.content && <Modal />}

              {state.loading && (
                <Background>
                  <Loader />
                </Background>
              )}
            </div>
          </Router>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
