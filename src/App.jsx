import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

// You may need to move these when creating new components
import imgElon from "./assets/images/elon.jpg";
import imgZuck from "./assets/images/zuck.jpg";

//Components
import NavBar from "./Components/NavBar.jsx";
import TopBar from "./Components/TopBar.jsx";
import CreateTweet from "./Components/CreateTweet.jsx";
import ShowMore from "./Components/ShowMore.jsx";
import TweetContent from "./Components/TweetContent.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import Verify from "./Components/Verify.jsx";
import WhatsHappening from "./Components/WhatsHappening.jsx";
import WhoToFollow from "./Components/WhoToFollow.jsx";

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
      <NavBar loggedInUser={loggedInUser} />
      <main>
        <TopBar />
        <CreateTweet
          loggedInUser={loggedInUser}
          createTweetContent={createTweetContent}
          addTweet={addTweet}
        />
        <ShowMore />
        <TweetContent tweets={tweets} />
      </main>

      <aside className="right-side">
        <SearchBar />
        <Verify />
        <div className="widget">
          <WhatsHappening />
        </div>
        <WhoToFollow imgElon={imgElon} imgZuck={imgZuck} />
      </aside>
    </div>
  );
}

export default App;
