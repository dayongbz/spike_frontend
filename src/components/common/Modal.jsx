import Main from "../../pages/Main";
import Button from "./Button";

function Modal() {
  return (
    <div id="modal-background">
      <div id="modal-wrapper">
        <div className="title">Check Your username</div>
        <div className="content">Are you sure you want to use it</div>
        <div className="button-wrapper">
          <Button rounded={true} width="30%" fontSize="0.8rem">
            Yes
          </Button>
          <Button rounded={true} width="30%" fontSize="0.8rem" type="sub">
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
