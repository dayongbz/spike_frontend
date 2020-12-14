// import plusLogo from "../assets/img/control_point-24px.svg";
import porfileInit from "../assets/img/account_circle-24px.svg";

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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
