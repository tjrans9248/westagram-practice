import React, { useState } from "react";
import Comment from "./Comment";


const MainFeed = ({feedInfo}) => {
  const {navId, navImage, feedImage} = feedInfo;

  const [saveComments, setSaveComments] = useState([]);
  const [inputComments, setInputComments] = useState('');
  const [userName] = useState('tjrans9248');

  const onChange = (event) => {
    setInputComments(event.target.value);
  }

  const onClick = (event) => {
    const copy = [...saveComments];
    copy.push(inputComments);
    setSaveComments(copy);
    setInputComments('');
  } 
  
  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      onClick(); 
    } 
  }

  const deleteComment = (event) => {
    setSaveComments(saveComments.filter(comment => comment.commentList !== event))
  }
  

    return(
      <div className="main-feed-container">
        <div className="main-feed">
          <div className="main-feed-nav">
            <div className="main-feed-nav-inner">
              <div className="main-feed-nav-image-box">
                <img 
                className="main-feed-nav-pic" 
                src={navImage}
                alt="feedProfile" />
              </div>
                <p className="main-nav-feed-id">{navId}</p>
                <i className="fa-solid fa-ellipsis feed-nav-ellipsis"></i>
            </div>
          </div>

          <div className="main-feed-main">
            <img 
            className="main-feed-main-pic" 
            src={feedImage}
            alt="feed-main"/>
          </div>

          <div className="main-feed-comment">
            <div className="main-feed-footer-icons">
              <div>
                <i className="fa-regular fa-heart main-nav-heart icon-padding" />  
                <i className="fa-regular fa-comment icon-padding"></i>
                <i className="fa-regular fa-paper-plane icon-padding"></i>
              </div>
                <i className="fa-regular fa-bookmark icon-padding2"></i>
            </div>

            
            <div>
              <div className="main-feed-footer-comments" >
              {saveComments.map((comment, commentList) => {
                return(
                  <div className="comment-list" key={commentList}>
                    <Comment
                  
                    userName={userName}
                    comment={comment}
                    deleteComment={deleteComment}
                    />
                  </div>
                )
              })}
              <div className="inputAndButton">
                <input 
                  type="text"
                  placeholder="댓글달기"
                  className="comment-input"
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  value={inputComments}
                  />

                  <input
                  type="button"
                  value="게시"
                  className="comment-button"
                  onClick={onClick}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
      
      
  )
}
export default MainFeed;