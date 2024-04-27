export default function CreateTweetForm(props) {
  return (
    <div className="create-tweet">
      <form onSubmit={props.addTweet}>
        <div className="avatar-section">
          <div className="profile-icon">
            <img src={props.loggedInUser.profileImage} />
          </div>
        </div>

        <div className="textarea-section">
          <textarea
            className="content"
            type="text"
            placeholder="What is happening?!"
            value={props.createTweetContent}
            onChange={(e) => props.setCreateTweetContent(e.target.value)}
          ></textarea>
        </div>

        <div></div>

        <div className="actions-section">
          <div className="actions">
            <i className="fa-regular fa-image action-icon"></i>
            <i className="fa-solid fa-list action-icon"></i>
            <i className="fa-regular fa-face-smile action-icon"></i>
            <i className="fa-regular fa-calendar action-icon"></i>
            <i className="fa-solid fa-location-dot action-icon"></i>
          </div>

          <button
            type="submit"
            disabled={props.createTweetContent.length < 1}
            className="tweet-btn"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
