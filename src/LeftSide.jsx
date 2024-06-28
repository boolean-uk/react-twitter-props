import React from 'react';

function LeftSide() {
  return (
    <div className="left-side">
      <div className="logo">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="menu-item"><i className="fa fa-home"></i><a href="/">Home</a></div>
      <div className="menu-item"><i className="fa fa-hashtag"></i><a href="/">Explore</a></div>
      <div className="menu-item"><i className="fa fa-bell"></i><a href="/">Notifications</a></div>
      <div className="menu-item"><i className="fa fa-envelope"></i><a href="/">Messages</a></div>
      <div className="menu-item"><i className="fa fa-list"></i><a href="/">Lists</a></div>
      <div className="menu-item"><i className="fa fa-bookmark"></i><a href="/">Bookmarks</a></div>
      <div className="menu-item"><i className="fa fa-check-circle"></i><a href="/">Verified</a></div>
      <div className="menu-item"><i className="fa fa-user"></i><a href="/">Profile</a></div>
      <div className="menu-item"><i className="fa fa-ellipsis-h"></i><a href="/">More</a></div>
      <button className="tweet-btn">Tweet</button>
      <div className="profile-card">
        <img src="/src/assets/images/doge.jpg" alt="Profile" className="profile-icon" />
        <div>
          <h4>Doge</h4>
          <small>@doge</small>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
