import porfileInit from "../assets/img/account_circle-24px.svg";
import leftArrow from"../assets/img/keyboard_arrow_left-24px.svg";
function Send(props) {
  const { address } = props;
  return (
    <>
      <div id="nav-wrapper">
        <div id="arrow-wrapper">
          <img id ="left-arrow" src={leftArrow} width = "50px"/>
          <div id="send-title">
           <p>Send</p>
         </div>
        </div>
      </div>
        <div id ="send-wrapper">
          <div id="send-text">
            Enter the amount
          </div>
          <div id="search-wrapper">
            <input type="text" id="search-box"></input>
            {/* <img src={plusLogo} id="plus-button" alt="plus button" /> */}
          </div>
      
          <div id="send-contacts" className="wrapper">
        

            <div id="send-slider" className="slider scrollbar">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8,9,10].map((val) => (
                <div key={val} id="contacts-list">
                  <img
                    className="contacts-init"
                    src={porfileInit}
                    alt="profile"
                    width="30px"
                  />
                  <div id="contacts-info">
                    <p className="name ellip">Anonymous</p>
                    <p className="address ellip">
                      {address ? address : "can't find address"}
                    </p>
                  </div>
                  <button id="constacts-button">
                    <p id="constacts-button-text">send</p>
                  </button>
                </div>
              ))}
          </div>
      </div>
    </div>
    </>
  );
}

export default Send;
