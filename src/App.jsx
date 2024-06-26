import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

// You may need to move these when creating new components
import LeftSide from "./Left-side.jsx";

import MainFeed from "./Main-feed.jsx";
import RightSide from "./Right-side.jsx";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");
  const [searchTweets, setSearchTweets] = useState('');

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
      <LeftSide loggedInUser={loggedInUser} />
      <MainFeed
        loggedInUser={loggedInUser}
        setCreateTweetContent={setCreateTweetContent}
        createTweetContent={createTweetContent}
        tweets={tweets}
        setTweets={setTweets}
        addTweet={addTweet}
        searchTweets ={searchTweets}
      />
      <RightSide setSearchTweets ={setSearchTweets}/>
    </div>
  );
}

export default App;
