import { useState } from "react";
import tweets from "../assets/data/tweets";
import ListSearchItems from "./ListSearchItems";

export default function SearchTweets() {
  const [searchTweets, setTweetSearch] = useState("");

  const filterTweets = () => {
    return tweets.filter((tweet) => {
      tweet.handle && tweet.name && tweet.content === searchTweets;
    });
  };

  const handleChange = (event) => {
    setTweetSearch(event.target.value);
  };

  return (
    <div className="search-section">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        className="search"
        type="text"
        placeholder="Search Twitter"
        onChange={handleChange}
        value={searchTweets}
      />
      <ul>
        {filterTweets().map((tweet, index) => {
          return <ListSearchItems tweet={tweet} key={index} />;
        })}
      </ul>
    </div>
  );
}
