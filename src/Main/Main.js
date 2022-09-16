import React ,{ useEffect, useState } from "react";
import MainNav from "./MainNav";
import MainFeed from './MainFeed';
import MainRight from "./MainRight";
import './MainNav.scss';
import './Main.scss'
import './MainFeed.scss';
import './MainRight.scss';


const Main = () => {
  const[mainFeed, setMainFeed] = useState([])

  useEffect(()=>{
    fetch('/data/Feed.json')
    .then(data => data.json())
    .then(result => setMainFeed(result));
  })

  return(
    <div className="main">
      <MainNav/>
        <div className="main-container">
          {mainFeed.map((feedInfo, feed) => {
            return(
              <div className="main-inner-container"key={feed}>
                <MainFeed
                feedInfo={feedInfo}
                />
              </div>
            )
          })}
            <MainRight/>
        </div>
    </div>

  )
}

export default Main;                    