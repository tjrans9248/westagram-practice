import React from "react";

const MainNav = () => {
  return(
    <div className="main-nav">
        <div className="">
          <i className="fa-brands fa-instagram main-nav-logo" />
          <span className="main-nav-bar"> | </span>
          <span className="main-nav-letter">facebook</span>
        </div>

        <div>
          <i className="fa-solid fa-magnifying-glass main-nav-search" />
          <input type="search" placeholder="검색" className="main-nav-input"/>
        </div>

        <div className="main-nav-right">
          <div className="main-nav-right-image-box">
            <img src="./images/sean.jpeg" className="main-nav-right-image" alt="profile"/>
          </div>
          <div className="main-nav-right-icon-box">
            <i className="fa-regular fa-user main-nav-profile" />
            <i className="fa-regular fa-heart main-nav-heart" />
            <i className="fa-regular fa-compass main-nav-compass" />
          </div>
        </div>
      </div>
  )
}

export default MainNav;