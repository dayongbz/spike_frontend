import { Link, useLocation } from "react-router-dom";
import homeLogo from "../../assets/img/home-24px.svg";
import contactsLogo from "../../assets/img/people-24px.svg";
import recordLogo from "../../assets/img/article-24px.svg";
import settingLogo from "../../assets/img/settings-24px.svg";

function Nav() {
  const path = useLocation().pathname;
  return (
    path &&
    !path.includes("/intro") &&
    !path.includes("/emailverify") && (
      <div id="button-wrapper" className="button-wrapper">
        <Link to="/">
          <div className="logo-button">
            <img
              className="home-logo"
              src={homeLogo}
              alt="logo"
              width="40px"
            ></img>
            <p className="logo-title" id="home-title">
              HOME
            </p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="logo-button">
            <img
              className="contacts-logo"
              src={contactsLogo}
              alt="logo"
              width="40px"
            ></img>
            <p className="logo-title" id="contacts-title">
              CONTACT
            </p>
          </div>
        </Link>

        <Link to="/record">
          <div className="logo-button">
            <img
              className="record-logo"
              src={recordLogo}
              alt="logo"
              width="40px"
            ></img>
            <p className="logo-title" id="record-title">
              RECORD
            </p>
          </div>
        </Link>
        <Link to="/setting">
          <div className="logo-button">
            <img
              className="setting-logo"
              src={settingLogo}
              alt="logo"
              width="40px"
            ></img>
            <p className="logo-title" id="setting-title">
              SETTING
            </p>
          </div>
        </Link>
      </div>
    )
  );
}

export default Nav;
