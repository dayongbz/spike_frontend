import ContactList from "./ContactList";

function ContactSlider({ height }) {
  return (
    <div
      id="contact-slider"
      className="slider scrollbar"
      style={height && { height }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val) => (
        <ContactList key={val} />
      ))}
    </div>
  );
}

export default ContactSlider;
