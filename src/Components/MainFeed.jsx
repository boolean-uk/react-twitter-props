import Tweets from "./Tweets";
import TweetForm from "./TweetForm"

export default function MainFeed({
  loggedInUser,
  setCreateTweetContent,
  createTweetContent,
  tweets,
  setTweets,
}) {


  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>

      <div className="create-tweet">
        <TweetForm loggedInUser={loggedInUser} createTweetContent={createTweetContent} setCreateTweetContent={setCreateTweetContent} setTweets={setTweets} tweets={tweets}/>
      </div>

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>
      <Tweets tweets={tweets} />
    </main>
  );
}
