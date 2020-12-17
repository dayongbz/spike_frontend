import RecordSlider from "../components/RecordSlider";

import downArrow from "../assets/img/keyboard_arrow_down-24px.svg";

function Record(props) {
  const { balance } = props;
  return (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Record</p>
        </div>
      </div>
      <div id="holdings-wrapper" className="wrapper">
        <p className="title">Holdings</p>
        <div className="info">
          <div className="top">
            <div className="balance-info">
              <p className="balance">
                <span className="type">ETH</span>
                {balance}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="month-wrapper" className="wrapper">
        <div id="month">
          <p className="title">Decemder</p>
          <img
            className="downArrow"
            src={downArrow}
            alt="profile"
            width="32px"
          />
        </div>
        <div>
          <p id="expense-balance" className="balance">
            <span className="type">-7.693 ETH</span>
            {balance}
          </p>

          <p id="profit-balance" className="balance">
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
        <RecordSlider height="300px" />
      </div>
    </>
  );
}

export default Record;
