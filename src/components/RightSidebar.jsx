import React from 'react';
import imgElon from '../assets/images/elon.jpg';
import imgZuck from '../assets/images/zuck.jpg';

const RightSidebar = () => {
  return (
    <aside className="right-side">
      <div className="search-section">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input className="search" type="text" placeholder="Search Twitter" />
      </div>

      {/* Widget sections */}

      <div className="widget">
        <h1>Who to follow</h1>

        <div className="follow-block">
          <div className="icon">
            <img src={imgElon} alt="Elon Musk" />
          </div>

          <div className="content">
            <h4>Elon Musk</h4>
            <h5>@elonmusk</h5>
          </div>

          <div className="action">
            <button className="follow-btn">Follow</button>
          </div>
        </div>

        <div className="follow-block">
          <div className="icon">
            <img src={imgZuck} alt="Mark Zuckerberg" />
          </div>

          <div className="content">
            <h4>Mark Zuckerberg</h4>
            <h5>@markzuckerberg</h5>
          </div>

          <div className="action">
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;