import React from 'react';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <img src={tweet.profileImage} alt={tweet.name} className="avatar" />
      <div className="tweet-content">
        <div>
          <strong>{tweet.name}</strong> <span>@{tweet.handle}</span> <span>{tweet.date}</span>
        </div>
        <p>{tweet.content}</p>
        <div className="tweet-actions">
          <span><i className="fa fa-comment"></i> {tweet.commentCount}</span>
          <span><i className="fa fa-retweet"></i> {tweet.retweetCount}</span>
          <span><i className="fa fa-heart"></i> {tweet.heartCount}</span>
          <span><i className="fa fa-bar-chart"></i> {tweet.analyticsCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
