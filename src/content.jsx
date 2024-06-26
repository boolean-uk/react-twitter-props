import React from "react";
import tweetform from "./tweetform";
import tweet from "./tweet";
import tweets from "./assets/data/tweets";

const content = ({ loggedInUser, tweets, addTweet }) => {
  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweets.map((tweet, index) => (
        <tweet key={index} tweet={tweet} />
      ))}
    </main>
  );
};

export default content;
