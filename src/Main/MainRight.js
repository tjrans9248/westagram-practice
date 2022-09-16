import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";

const MainRight = () => {

  const[profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    fetch('/data/profileInfo.json')
    .then(data => data.json())
    .then(result => setProfileInfo(result));
  })


  return(
    <div className="main-right">
      <div className="main-right-top">
        <div className="main-right-top-image-box">
          <img 
            scr="https://i.pinimg.com/474x/c9/94/83/c99483da1bd81d9cdc99132ea495f067.jpg"
            className="main-right-top-image" 
            alt="rightProfile"
          />
        </div>
        <div className="main-right-top-userId">
          <p>tjrans9248</p>
          <p>seokmoonyang(sean)</p>
        </div>
        <p className="change">전환</p>
      </div>


      <div className="main-right-middle">
        <div className="main-right-title">
          <span>스토리</span>
          <span>모두보기</span>
        </div>

        {profileInfo.map((information, userInfo) => {
          return(
            <div key={userInfo}>
              <ProfileInfo
              information={information}
              />
            </div>
          )
        })}
      </div>
    



      <div className="main-right-bottom">
        <div className="main-right-title">
          <span>회원님을 위한 추천</span>
          <span>모두보기</span>
        </div>

        {/* {profileInfo.map((information, userInfo) => {
          return(
            <div key={userInfo}>
              <ProfileInfo
              information={information}
              />
            </div>
          )
        })} */}
        
      </div>
    </div>
  )
}

export default MainRight;