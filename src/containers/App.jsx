import { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
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
import LoginCheck from "../components/common/LoginCheck";

import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import web3 from "../utils/web3";

import "./reset.css";
import "./loader.css";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

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
          <div id="outer-wrapper">
            <div id="cont-wrapper" className="scrollbar">
              <Route exact path="/">
                <LoginCheck>
                  <Main />
                </LoginCheck>
              </Route>
              <Route path="/contact">
                <LoginCheck>
                  <Contact />
                </LoginCheck>
              </Route>
              <Route path="/record">
                <LoginCheck>
                  <Record />
                </LoginCheck>
              </Route>
              <Route path="/setting">
                <LoginCheck>
                  <Setting />
                </LoginCheck>
              </Route>
              <Route path="/send">
                <LoginCheck>
                  <Send />
                </LoginCheck>
              </Route>
              <Route path="/intro">
                <Intro />
              </Route>
              <Route path="/emailverify">
                <EmailVerify />
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
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
