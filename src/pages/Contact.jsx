// import plusLogo from "../assets/img/control_point-24px.svg";
import porfileInit from "../assets/img/account_circle-24px.svg";
import ContactSlider from "../components/ContactSlider";

function Contact(props) {
  const { address } = props;
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Contacts</p>
        </div>
        <div id="search-wrapper">
          <input type="text" id="search-box"></input>
          {/* <img src={plusLogo} id="plus-button" alt="plus button" /> */}
        </div>
      </div>

      <div id="contacts-wrapper" className="wrapper">
        <ContactSlider />
      </div>
    </>
  );
}

export default Contact;
