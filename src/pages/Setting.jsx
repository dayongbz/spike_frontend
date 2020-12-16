import { Link } from "react-router-dom";
import porfileInit from "../assets/img/account_circle-24px.svg";
import notice from "../assets/img/alarm-24px.svg";
import withdrawal from "../assets/img/clear-24px.svg";
import rightArrow from "../assets/img/keyboard_arrow_right-24px.svg";

function Setting() {
  return (
    <div id="nav-wrapper">
      <div id="title">
        <Link to="/intro">
          <div>Setting</div>
        </Link>
      </div>
      <div id="setting-wrapper">
      <div id="table-wrapper">
        <div id="my-info" className="settingTable">
          <img className="profile-init" src={porfileInit} alt="profile"/>
          <div id="my-info-text">내 정보</div>   
        </div>
        <img className="rightArrow" id="rA-info" src={rightArrow} width="50px"></img> 
      </div>

      <div id="table-wrapper">
        <div id="notice" className="settingTable">
          <img className="noticeIcon" src={notice} alt="notice"/>
          <div id="notice-text">공지사항</div>   
        </div>
        <img className="rightArrow" id="rA-notice"src={rightArrow} width="50px"></img> 
      </div>

      <div id="table-wrapper">
        <div id="withdrawal" className="settingTable">
          <img className="withdrawalIcon" src={withdrawal} alt="withdrawal"/>
          <div id="withdrawal-text">계정탈퇴</div>   
        </div>
        <img className="rightArrow" id="rA-withdrawal"src={rightArrow} width="50px"></img> 
      </div>
    </div>


  </div>
  );
}

export default Setting;
