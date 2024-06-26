import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import sidebar from "./sidebar.jsx";
import content from "./content.jsx";
import tweet from "./tweet.jsx";
import tweetform from "./tweetform.jsx";
import "./index.css";

// You may need to move these when creating new components
import imgElon from "./assets/images/elon.jpg";
import imgZuck from "./assets/images/zuck.jpg";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);

  const addTweet = (e) => {
    e.preventDefault();
    setTweets([
      {
        ...loggedInUser,
        date: "1m",
        content: createTweetContent,
        commentCount: 0,
        retweetCount: 0,
        heartCount: 0,
        analyticsCount: 0,
      },
      ...tweets,
    ]);
  };

  return (
    <div className="container">
      <div className="menu-item">
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
          Explore
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-regular fa-bell"></i>
          Notifications
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-regular fa-envelope"></i>
          Messages
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-solid fa-bars"></i>
          Lists
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-regular fa-bookmark"></i>
          Bookmarks
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-regular fa-circle-check"></i>
          Verified
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-regular fa-user"></i>
          Profile
        </a>
      </div>

      <div className="menu-item">
        <a href="#">
          <i className="fa-solid fa-ellipsis"></i>
          More
        </a>
      </div>

      <aside className="right-side">
        <div className="search-section">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input className="search" type="text" placeholder="Search Twitter" />
        </div>

        <div className="widget">
          <div className="widget-grid">
            <h1>Get Verified</h1>
            <h3>Subscribe to unlock nothing.</h3>

            <button className="verify-btn">Get Verified</button>
          </div>
        </div>

        <div className="widget">
          <h1>What's happening</h1>

          <div className="news-block">
            <div className="content">
              <small>Entertainment · Trending</small>
              <h4>Elon Musk</h4>
              <small>14.5k Tweets</small>
            </div>

            <div className="action">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>

          <div className="news-block">
            <div className="content">
              <small>Cage Fights · Trending</small>
              <h4>Mark Zuckerberg</h4>
              <small>59.1k Tweets</small>
            </div>

            <div className="action">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
        <div className="widget">
          <h1>Who to follow</h1>

          <div className="follow-block">
            <div className="icon">
              <img src={imgElon} />
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
              <img src={imgZuck} />
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
    </div>
  );
}

export default App;
