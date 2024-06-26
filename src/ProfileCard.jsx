import React from "react";

function ProfileCard({ profile }) {
  return (
    <div className="follow-block">
      <div className="icon">
        <img src={profile.image} alt={profile.name} />
      </div>

      <div className="content">
        <h4>{profile.name}</h4>
        <h5>{profile.handle}</h5>
      </div>

      <div className="action">
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
}

export default ProfileCard;
