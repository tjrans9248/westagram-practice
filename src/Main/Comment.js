import React from "react";


const Comment = ({userName, comment, deleteComment,commentList}) => {
  return(

  <div className="comment-box">
    <div className="comment">
      <span>{userName}</span>
      <span>{comment}</span>
    </div>

    <div className="icon-box">
      <i className="fa-regular fa-heart main-nav-heart" />
      <button onClick={() => deleteComment(commentList)}>X</button>
    </div>
  </div>
    
  )
} 
export default Comment;