import { useState } from "react";
import initialTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import LeftSide from "./LeftSide";
import MiddleSection from "./MiddleSection";
import RightSide from "./RightSide";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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
    setCreateTweetContent("");
  };

  const filteredTweets = tweets.filter((tweet) =>
    tweet.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <LeftSide loggedInUser={loggedInUser} />
      <MiddleSection
        tweets={filteredTweets}
        addTweet={addTweet}
        createTweetContent={createTweetContent}
        setCreateTweetContent={setCreateTweetContent}
        loggedInUser={loggedInUser}
      />
      <RightSide setSearchQuery={setSearchQuery} />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
