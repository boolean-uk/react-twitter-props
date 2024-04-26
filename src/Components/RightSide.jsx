import tweets from "../assets/data/tweets";
import imgElon from "../assets/images/elon.jpg";
import imgZuck from "../assets/images/zuck.jpg";
import FollowBack from "./FollowBack";
import SearchTweets from "./SearchTweets";
import WhatsHappening from "./WhatsHappening";

export default function RightSide() {
  return (
    <aside className="right-side">
      <SearchTweets />

      <div className="widget">
        <div className="widget-grid">
          <h1>Get Verified</h1>
          <h3>Subscribe to unlock nothing.</h3>

          <button className="verify-btn">Get Verified</button>
        </div>
      </div>

      <div className="widget">
        <h1>What's happening</h1>
        {tweets.map((user, index) => {
          return <WhatsHappening user={user} key={index} />;
        })}
      </div>
      <div className="widget">
        <h1>Who to follow</h1>
        {tweets.map((user, index) => {
          return <FollowBack user={user} key={index} />;
        })}
      </div>
    </aside>
  );
}
