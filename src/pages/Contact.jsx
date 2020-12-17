import { useContext, useState } from "react";

import ContactSearch from "../containers/ContactSearch";
import Button from "../components/common/Button";

import web3 from "../utils/web3";

import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import axios from "axios";

function Contact() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [errMsg, setErrMsg] = useState("");
  const [username, setUsername] = useState("0");
  const [address, setAddress] = useState("0");
  const onClick = async () => {
    if (web3.utils.isAddress(address) && username.length <= 20) {
      try {
        setErrMsg("");
        dispatch({ type: "SET_LOADING" });
        await axios.post(
          "/users/contact",
          { username, address },
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({ type: "RESET_LOADING" });
      }
    } else {
      setErrMsg("Please check your values💦");
    }
  };
  const onChangeName = (e) => {
    setUsername(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Contacts</p>
        </div>
      </div>
      <div id="new-contact-wrapper" className="wrapper">
        <p className="title">New Contact 🤝</p>
        <div className="input-wrapper">
          <input type="text" placeholder="username" onChange={onChangeName} />
          <input type="text" placeholder="address" onChange={onChangeAddress} />
        </div>
        <p className="err-msg">{errMsg}</p>
        <Button onClick={onClick} borderRadius="8px" fontSize="1rem">
          add
        </Button>
      </div>
      <ContactSearch height="350px" />
    </>
  );
}

export default Contact;
