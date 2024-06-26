import React from "react";
import CreateTweetForm from "./CreateTweetForm";
import Tweets from "./Tweets";

function Middle({ tweets, setTweets, loggedInUser }) {
  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>

      <CreateTweetForm loggedInUser={loggedInUser} setTweets={setTweets} />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      <Tweets tweets={tweets} />
    </main>
  );
}

export default Middle;
