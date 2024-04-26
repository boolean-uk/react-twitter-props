import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import LeftSide from "./Components/LeftSide.jsx";
import MainBody from "./Components/MainBody.jsx";
import RightSide from "./Components/RightSide.jsx";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");

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
      <MainBody
        loggedInUser={loggedInUser}
        tweets={tweets}
        createTweetContent={createTweetContent}
        addTweet={addTweet}
        setCreateTweetContent={setCreateTweetContent}
      />
      <RightSide />
    </div>
  );
}

export default App;
