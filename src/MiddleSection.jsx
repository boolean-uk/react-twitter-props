import React from "react";
import Tweet from "./Tweet";
import CreateTweetForm from "./CreateTweetForm";

const MiddleSection = ({
  tweets,
  addTweet,
  createTweetContent,
  setCreateTweetContent,
  loggedInUser,
}) => {
  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>

      <CreateTweetForm
        addTweet={addTweet}
        createTweetContent={createTweetContent}
        setCreateTweetContent={setCreateTweetContent}
        loggedInUser={loggedInUser}
      />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </main>
  );
};

export default MiddleSection;
