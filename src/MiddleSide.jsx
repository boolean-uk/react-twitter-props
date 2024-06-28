import React from 'react';
import Tweet from './Tweet';
import tweets from './assets/data/tweets';

function MiddleSide() {
  return (
    <main>
      <div className="top-bar">
        <div className="title">Home</div>
        <i className="fa fa-star"></i>
      </div>
      <div className="create-tweet">
        <img src="/src/assets/images/doge.jpg" alt="Profile" className="avatar" />
        <input type="text" className="content" placeholder="What is happening?!" />
        <div className="actions-section">
          <div className="actions">
            <i className="fa fa-image action-icon"></i>
            <i className="fa fa-bar-chart action-icon"></i>
            <i className="fa fa-smile action-icon"></i>
            <i className="fa fa-calendar action-icon"></i>
            <i className="fa fa-map-marker action-icon"></i>
          </div>
          <button className="tweet-btn">Tweet</button>
        </div>
      </div>
      <div className="tweets">
        {tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}
      </div>
    </main>
  );
}

export default MiddleSide;
