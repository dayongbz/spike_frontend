import { useReducer, useEffect } from "react";
import { Route } from "react-router-dom";
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
import GetRecord from "../components/common/GetRecord";
import GetContact from "../components/common/GetContact";

import initialState from "../reducer/initialState";
import reducer from "../reducer/reducer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";

import "./reset.css";
import "rc-tooltip/assets/bootstrap.css";
import "./loader.css";
import "./App.css";

const App = memo(() => {
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
  useEffect(() => {});
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
              <LoginCheck>
                <Route exact path="/">
                  <GetRecord>
                    <GetContact>
                      <Main />
                    </GetContact>
                  </GetRecord>
                </Route>
                <Route path="/contact">
                  <GetContact>
                    <Contact />
                  </GetContact>
                </Route>
                <Route path="/record">
                  <GetRecord>
                    <GetContact>
                      <Record />
                    </GetContact>
                  </GetRecord>
                </Route>
                <Route path="/setting">
                  <Setting />
                </Route>
                <Route path="/send">
                  <GetContact>
                    <Send />
                  </GetContact>
                </Route>
                <Route path="/intro">
                  <Intro />
                </Route>
              </LoginCheck>
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
});

export default App;
