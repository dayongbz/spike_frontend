import { useHistory } from "react-router-dom";

import ContactSearch from "../containers/ContactSearch";
import Button from "../components/common/Button";

import leftArrow from "../assets/img/keyboard_arrow_left-24px.svg";

function Send() {
  const history = useHistory();

  const onClickPrev = () => {
    history.goBack();
  };
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">Send</div>
        <div id="arrow-wrapper">
          <img
            onClick={onClickPrev}
            id="left-arrow"
            src={leftArrow}
            width="50px"
            alt="prev"
          />
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
