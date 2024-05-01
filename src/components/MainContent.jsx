import React from 'react';
import Tweet from './Tweet';

const MainContent = ({ loggedInUser, tweets, createTweetContent, setCreateTweetContent, addTweet }) => {
  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>

      <div className="create-tweet">
        <form onSubmit={addTweet}>
          {/* Create tweet form */}
        </form>
      </div>

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </main>
  );
};

export default MainContent;