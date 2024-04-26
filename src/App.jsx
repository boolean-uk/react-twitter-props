import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";


import LeftNav from "./Components/LeftNav.jsx";
import MainFeed from "./Components/MainFeed.jsx"
import RightNav from "./Components/RightNav.jsx"

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");
  const [searchTerm, updateSearchTerm] = useState('')

  return (
    <div className="container">
      <LeftNav loggedInUser={loggedInUser} />

      <MainFeed
        loggedInUser={loggedInUser}
        setCreateTweetContent={setCreateTweetContent}
        createTweetContent={createTweetContent}
        tweets={tweets}
        setTweets={setTweets}
        searchTerm={searchTerm}
      />

      <RightNav updateSearchTerm={updateSearchTerm}/>

      
    </div>
  );
}

export default App;
