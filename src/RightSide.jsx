import React from "react";
import SearchBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";
import ProfileCard from "./ProfileCard";
import imgElon from "./assets/images/elon.jpg";
import imgZuck from "./assets/images/zuck.jpg";

const profiles = [
  { name: "Elon Musk", handle: "@elonmusk", image: imgElon },
  { name: "Mark Zuckerberg", handle: "@markzuckerberg", image: imgZuck },
];

function RightSide({ onSearch }) {
  return (
    <aside className="right-side">
      <SearchBar onSearch={onSearch} />

      <div className="widget">
        <div className="widget-grid">
          <h1>Get Verified</h1>
          <h3>Subscribe to unlock nothing.</h3>

          <button className="verify-btn">Get Verified</button>
        </div>
      </div>

      <WhatsHappening />

      <div className="widget">
        <h1>Who to follow</h1>
        {profiles.map((profile) => (
          <ProfileCard key={profile.handle} profile={profile} />
        ))}
      </div>
    </aside>
  );
}

export default RightSide;
