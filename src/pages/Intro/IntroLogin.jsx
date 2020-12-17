import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/common/Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import web3 from "../../utils/web3";

function IntroLogin() {
  const [errMsg, setErrMsg] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const onChangeUsername = (event) => {
    SetUsername(event.target.value);
  };

  const onChangePwd = (event) => {
    SetPassword(event.target.value);
  };

  const onClick = async (e) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const user = await axios.post(
        "/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const balance = await web3.eth.getBalance(user.data.address);
      dispatch({
        type: "SET_USER",
        username: user.data.username,
        address: user.data.address,
        balance: web3.utils.fromWei(balance),
      });
      setErrMsg("");
      history.push("/");
    } catch (error) {
      setErrMsg(error.response.data + " 😥");
    } finally {
      dispatch({ type: "RESET_LOADING" });
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <p className="sub">😥It has been a while😥</p>
        <h1>
          Let's <span className="main">Login</span>
        </h1>
        <div className="sub-wrapper">
          <input
            type="username"
            className="sub rounded"
            onChange={onChangeUsername}
            placeholder="username"
            style={{ margin: "0 0 10px 0" }}
          />
          <input
            type="password"
            className="sub rounded"
            onChange={onChangePwd}
            placeholder="password"
          />
        </div>
        <p className="error-msg">{errMsg}</p>
      </div>
      <div className="sub-wrapper">
        <Button onClick={onClick} rounded="true">
          Verify email
        </Button>
      </div>
    </>
  );
}

export default IntroLogin;
