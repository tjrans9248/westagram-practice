import React from "react";

const ProfileInfo = ({information}) => {
  const {userImage, userId, userName} = information;

  return(

    <div className="main-right-middle-container">
      <div className="main-right-middle-image-box">
        <img 
        className="main-right-middle-image" 
        scr= {userImage} 
        alt="rightBoxProfile" 
        />
      </div>
      <div className="main-right-middle-userId">
        <p className="main-right-middle-userId-first">{userId}</p>
        <p className="main-right-middle-userId-second">{userName}</p>
      </div>
      <p className="change">전환</p>
    </div>
  )
}

export default ProfileInfo;