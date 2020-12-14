function Record(props) {
  const { address, balance} = props;
  return  (
    <>
      <div id="nav-wrapper">
        <div id="title">
          <p>Record</p>
        </div>
      </div>
      <div id ="Holdings-wrapper" className="wrapper">
        <p className="title">Holdings</p>
            <div className="Info">
              <div className="top">
               <div className="balanceInfo">
                <p className="balance">
                  <span className="type">ETH</span>
                  32
                </p>   
                <p className="dollar">${32 * 575}</p>
              </div>
             </div>
           </div>
      </div>
        
      <div id="contacts-wrapper" className="wrapper">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
          <div key={val} id="contacts-list">
            
            <div id="contacts-info">
              <p className="name ellip">Anonymous</p>
              <p className="address ellip">
                {address ? address : "can't find address"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Record;
