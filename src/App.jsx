// App.jsx
import React, { useState } from 'react';
import initialTweets from './assets/data/tweets.js';
import user from './assets/data/user.js';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState('');

  const addTweet = (e) => {
    const addTweet = (e) => {
        e.preventDefault();
        setTweets([
          {
            ...loggedInUser,
            date: '1m',
            content: createTweetContent,
            commentCount: 0,
            retweetCount: 0,
            heartCount: 0,
            analyticsCount: 0,
          },
          ...tweets,
        ]);
        setCreateTweetContent('');
      };
  };

  return (
    <div className="container">
      <LeftSidebar loggedInUser={loggedInUser} />
      <MainContent
        loggedInUser={loggedInUser}
        tweets={tweets}
        createTweetContent={createTweetContent}
        setCreateTweetContent={setCreateTweetContent}
        addTweet={addTweet}
      />
      <RightSidebar />
    </div>
  );
}

export default App;