import ContactSlider from "../components/ContactSlider";

function ContactSearch({ height }) {
  return (
    <div id="contacts-wrapper" className="wrapper">
      <div id="search-wrapper">
        <input type="text" id="search-box"></input>
      </div>
      <ContactSlider height={height} />
    </div>
  );
}

export default ContactSearch;
