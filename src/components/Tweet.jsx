import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <article className="tweet">
      <div className="profile-icon">
        <img src={tweet.profileImage} alt="Profile" />
      </div>

      <div className="tweet-content">
        <h4>
          {tweet.name} <span>{tweet.handle} · {tweet.date}</span>
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

        <div className="tweet-actions">
          {/* Tweet action icons */}
        </div>
      </div>
    </article>
  );
};

export default Tweet;