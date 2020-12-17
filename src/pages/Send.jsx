import ContactSearch from "../containers/ContactSearch";
import Button from "../components/common/Button";

import leftArrow from "../assets/img/keyboard_arrow_left-24px.svg";
function Send(props) {
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">Send</div>
        <div id="arrow-wrapper">
          <img id="left-arrow" src={leftArrow} width="50px" />
        </div>
      </div>
      <div id="send-wrapper">
        <input
          type="number"
          placeholder="Enter the amount"
          id="send-input"
          min="0"
          step="0.1"
        ></input>
      </div>
      <ContactSearch height="400px" />
      <Button borderRadius="100px" margin="30px 0">
        Send
      </Button>
    </>
  );
}

export default Send;
