import TweetsList from "./TweetsList";
import CreateTweetForm from "./CreateTweetForm";
export default function Middle(props) {
  return (
    <main>
      <div className="top-bar">
        <h2 className="title">Home</h2>
      </div>
      <CreateTweetForm {...props} />
      <TweetsList {...props} />
    </main>
  );
}
