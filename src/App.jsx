import React, { useState, useEffect } from "react";
import initialTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [filteredTweets, setFilteredTweets] = useState(initialTweets);

  useEffect(() => {
    setFilteredTweets(tweets);
  }, [tweets]);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredTweets(tweets);
    } else {
      setFilteredTweets(
        tweets.filter((tweet) =>
          tweet.content.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="container">
      <LeftSide loggedInUser={loggedInUser} />
      <Middle
        tweets={filteredTweets}
        setTweets={setTweets}
        loggedInUser={loggedInUser}
      />
      <RightSide onSearch={handleSearch} />
    </div>
  );
}

export default App;
