import porfileInit from "../assets/img/account_circle-24px.svg";
import Button from "./common/Button";

function ContactList() {
  return (
    <div className="contact-list">
      <div className="contact-info">
        <img className="contact-img" src={porfileInit} alt="profile" />
        <p className="name">Anonymous</p>
      </div>
      <Button
        width="50px"
        fontSize="0.8rem"
        padding="5px 10px"
        borderRadius="3px"
      >
        send
      </Button>
    </div>
  );
}

export default ContactList;
