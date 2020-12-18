import { useContext } from "react";

import StateContext from "../context/StateContext";

import ContactList from "./ContactList";

function ContactSlider({ height, filter = "", button = true }) {
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
            <ContactList
              button={button}
              address={val.address}
              key={val.address}
              username={val.friendUsername}
            />
          )
      )}
    </div>
  );
}

export default ContactSlider;
