import React from 'react';

function RightSide() {
  return (
    <div className="right-side">
      <div className="search-section">
        <i className="fa fa-search search-icon"></i>
        <input type="text" className="search" placeholder="Search Twitter" />
      </div>
      <div className="widget">
        <h1>What's happening</h1>
        <div className="news-block">
          <div className="content">
            <h4>Entertainment · Trending</h4>
            <p>Elon Musk</p>
            <small>14.5k Tweets</small>
          </div>
          <i className="fa fa-ellipsis-h action"></i>
        </div>
        <div className="news-block">
          <div className="content">
            <h4>Cage Fights · Trending</h4>
            <p>Mark Zuckerberg</p>
            <small>59.1k Tweets</small>
          </div>
          <i className="fa fa-ellipsis-h action"></i>
        </div>
      </div>
      <div className="widget">
        <h1>Who to follow</h1>
        <div className="follow-block">
          <div className="icon"><img src="/src/assets/images/elon.jpg" alt="Elon Musk" /></div>
          <div className="content">
            <h4>Elon Musk</h4>
            <small>@elonmusk</small>
          </div>
          <div className="action"><button className="follow-btn">Follow</button></div>
        </div>
        <div className="follow-block">
          <div className="icon"><img src="/src/assets/images/zuck.jpg" alt="Mark Zuckerberg" /></div>
          <div className="content">
            <h4>Mark Zuckerberg</h4>
            <small>@markzuckerberg</small>
          </div>
          <div className="action"><button className="follow-btn">Follow</button></div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
