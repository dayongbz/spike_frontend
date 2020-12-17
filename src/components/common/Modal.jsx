import { useContext } from "react";

import Button from "./Button";

import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function Modal() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const onClickYes = () => {
    state.modal.callback(...(state.modal.param ? state.modal.param : []));
    dispatch({ type: "RESET_MODAL" });
  };

  const onClickNo = () => {
    dispatch({ type: "RESET_MODAL" });
  };

  return (
    <div id="modal-background">
      <div id="modal-wrapper">
        <div className="title">{state.modal.title}</div>
        <div className="content">{state.modal.content}</div>
        <div className="button-wrapper">
          <Button
            onClick={onClickYes}
            rounded={true}
            width="25%"
            fontSize="0.8rem"
            margin="0 5px"
          >
            Yes
          </Button>
          {!state.modal.only && (
            <Button
              onClick={onClickNo}
              rounded={true}
              width="25%"
              fontSize="0.8rem"
              type="sub"
            >
              No
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
