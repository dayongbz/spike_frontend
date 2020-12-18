import { useContext } from "react";
import { Link } from "react-router-dom";

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
      {state.contact?.length === 0 ? (
        <div className="nope-wrapper">
          <Link to="/contact">
            <p>
              You don't have contacts
              <br />
              click here and add contact
            </p>
          </Link>
        </div>
      ) : (
        state?.contact.map(
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
        )
      )}
    </div>
  );
}

export default ContactSlider;
