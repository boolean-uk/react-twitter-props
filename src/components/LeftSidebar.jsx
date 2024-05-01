// LeftSidebar.jsx
import React from 'react';

const LeftSidebar = ({ loggedInUser }) => {
  return (
    <aside className="left-side">
      <div className="logo">
        <i className="fa-brands fa-twitter"></i>
      </div>

      <div className="menu-item active">
        <a href="#">
          <i className="fa-solid fa-house"></i>
          Home
        </a>
      </div>

      {/* Rest of the menu items */}

      <button className="tweet-btn">Tweet</button>

      <div className="profile-card">
        <div className="profile-icon">
          <img src={loggedInUser.profileImage} alt="Profile" />
        </div>

        <div className="profile-details">
          <h4>{loggedInUser.name}</h4>
          <small>{loggedInUser.handle}</small>
        </div>

        <div className="action">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;