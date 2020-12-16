import sendIcon from"../assets/img/send.svg";
import acceptIcon from"../assets/img/accept.svg";
import downArrow from"../assets/img/keyboard_arrow_down-24px.svg";

function Record(props) {
  const { address, balance } = props;
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Record</p>
        </div>
      </div>
      <div id="Holdings-wrapper" className="wrapper">
        <p className="title">Holdings</p>
        <div className="Info">
          <div className="top">
            <div className="balanceInfo">
              <p className="balance">
                <span className="type">ETH</span>
                {balance}
              </p>
              <p className="dollar">${balance * 575}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="Month-wrapper" className="wrapper">
        <div id="Month">       
          <p className="title">Decemder</p>
          <img
            className="downArrow"
            src={downArrow}
            alt="profile"
            width="32px"
          />
        </div>
        <div>
          <p id= "expense-balance" className="balance">
            <span className="type">-7.693 ETH</span>
            {balance}
          </p>

          <p id= "profit-balance" className="balance">
            <span className="type">+37.469ETH</span>
            {balance}
          </p>
          
        </div>       


      </div>

      <div id="record-wrapper" className="wrapper">
         <div id="search-wrapper">
            <input type="text" id="search-box"></input>
            {/* <img src={plusLogo} id="plus-button" alt="plus button" /> */}
         </div>

        <div id="record-slider" className="slider scrollbar">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((val) =>(
            <div key={val} id ="record-list">
              <div id="send-record" className="record">
              <img
                  className="send-init"
                  src={sendIcon}
                  alt="profile"
                  width="16px"
                />
                <div id="send-info">
                  <p className="name ellip">이다용</p>
                </div>
                <div id= "send-balanceInfo" className="balanceInfo">
                  <p id= "send-balance" className="balance">
                    <span className="type">ETH</span>
                    {balance}
                  </p>
                  <p id= "send-dollar" className="dollar">${balance * 575}</p>
                </div>
            </div>
              <div id="accept-record" className="record">
                <img
                    className="accept-init"
                    src={acceptIcon}
                    alt="profile"
                    width="16px"
                  />
                  <div id="accept-info">
                  <p className="address ellip">
                      {address ? address : "can't find address"}
                    </p>
                  </div>
                  <div id= "accept-balanceInfo" className="balanceInfo">
                    <p id= "accept-balance" className="balance">
                      <span className="type">ETH</span>
                      {balance}
                    </p>
                    <p id= "accept-dollar" className="dollar">${balance * 575}</p>
                  </div>
              </div>
            </div>
          ))}
         
        
        </div>
      </div>
    </>
  );
}

export default Record;
