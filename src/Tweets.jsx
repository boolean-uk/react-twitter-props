import React from "react";
import TweetActions from "./TweetActions";

function Tweets({ tweets }) {
  return (
    <>
      {tweets.map((tweet, index) => (
        <article className="tweet" key={index}>
          <div className="profile-icon">
            <img src={tweet.profileImage} alt="Profile" />
          </div>

          <div className="tweet-content">
            <h4>
              {tweet.name}{" "}
              <span>
                {tweet.handle} · {tweet.date}
              </span>
            </h4>
            <p>{tweet.content}</p>

            {tweet.article && (
              <div className="tweet-article">
                <img src={tweet.article.image} alt="Article" />
                <small>{tweet.article.site}</small>
                <h5>{tweet.article.title}</h5>
                <p>{tweet.article.content}</p>
              </div>
            )}

            <TweetActions
              commentCount={tweet.commentCount}
              retweetCount={tweet.retweetCount}
              heartCount={tweet.heartCount}
              analyticsCount={tweet.analyticsCount}
            />
          </div>
        </article>
      ))}
    </>
  );
}

export default Tweets;
