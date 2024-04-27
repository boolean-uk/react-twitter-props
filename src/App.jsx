import { useState } from "react";
// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";
// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import LeftSide from "./LeftSide.jsx";
import Middle from "./Middle.jsx";
import RightSide from "./RightSide.jsx";

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

      <Middle
        tweets={tweets}
        addTweet={addTweet}
        loggedInUser={loggedInUser}
        createTweetContent={createTweetContent}
        setCreateTweetContent={setCreateTweetContent}
      />

      <RightSide />
    </div>
  );
}

export default App;
