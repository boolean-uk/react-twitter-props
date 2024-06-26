import React from "react";

function TweetActions({
  commentCount,
  retweetCount,
  heartCount,
  analyticsCount,
}) {
  return (
    <div className="tweet-actions">
      <span>
        <i className="fa-regular fa-comment"></i>
        <small>{commentCount}</small>
      </span>

      <span>
        <i className="fa-solid fa-arrows-rotate"></i>
        <small>{retweetCount}</small>
      </span>

      <span>
        <i className="fa-regular fa-heart"></i>
        <small>{heartCount}</small>
      </span>

      <span>
        <i className="fa-solid fa-chart-simple"></i>
        <small>{analyticsCount}</small>
      </span>

      <span>
        <i className="fa-solid fa-upload"></i>
      </span>
    </div>
  );
}

export default TweetActions;
