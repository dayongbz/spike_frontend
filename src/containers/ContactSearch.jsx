import { useState } from "react";

import ContactSlider from "../components/ContactSlider";

function ContactSearch({ height, button = true }) {
  const [filter, setFilter] = useState("");
  const onChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div id="contacts-wrapper" className="wrapper">
      <div id="search-wrapper">
        <input
          type="text"
          id="search-box"
          placeholder="find your friend(username or address)"
          onChange={onChange}
        ></input>
      </div>
      <ContactSlider button={button} height={height} filter={filter} />
    </div>
  );
}

export default ContactSearch;
