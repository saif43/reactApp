import React from "react";

const CommentDetail = (user) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avater" src={user.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {user.name}
        </a>
        <div className="metadata">
          <span className="date">{user.postingTime}</span>
        </div>
        <div className="text">{user.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
