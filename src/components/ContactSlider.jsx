import { useContext } from "react";

import StateContext from "../context/StateContext";
import web3 from "../utils/web3";

import ContactList from "./ContactList";

function ContactSlider({ height, filter = "" }) {
  const state = useContext(StateContext);
  return (
    <div
      id="contact-slider"
      className="slider scrollbar"
      style={height && { height }}
    >
      {state?.contact.map(
        (val) =>
          ((/^(0x)/.test(filter) && val.address.includes(filter)) ||
            val.friendUsername.includes(filter)) && (
            <ContactList key={val.address} username={val.friendUsername} />
          )
      )}
    </div>
  );
}

export default ContactSlider;
