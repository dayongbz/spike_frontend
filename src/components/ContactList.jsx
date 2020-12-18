import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Tooltip from "rc-tooltip";

import DispatchContext from "../context/DispatchContext";

import Button from "./common/Button";

import porfileInit from "../assets/img/account_circle-24px.svg";

function ContactList({ username, button, address = "0x" }) {
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const onClick = () => {
    if (!button) {
      dispatch({ type: "SET_SEND_ADDRESS", address });
    }
  };
  const onClickBtn = () => {
    dispatch({ type: "SET_SEND_ADDRESS", address });
    history.push("/send");
  };
  return (
    <>
      <Tooltip overlay={address} placement="topLeft" trigger={["click"]}>
        <div
          className="contact-list"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          <div className="contact-info">
            <img className="contact-img" src={porfileInit} alt="profile" />
            <p className="name">{username}</p>
          </div>
          {button && (
            <Button
              width="80px"
              fontSize="0.8rem"
              padding="8px 15px"
              borderRadius="3px"
              backgroundColor="#333"
              color="#808080"
              onClick={onClickBtn}
            >
              send
            </Button>
          )}
        </div>
      </Tooltip>
    </>
  );
}

export default ContactList;
