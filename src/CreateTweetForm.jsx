import ActionsSection from "./ActionsSection";

export default function CreateTweetForm({ addTweet, loggedInUser, createTweetContent, setCreateTweetContent }) {
    return (
        <div className='create-tweet'>
            <form onSubmit={addTweet}>
                <div className="avatar-section">
                    <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>
                </div>

                <div className="textarea-section">
                    <textarea
                        className="content"
                        type="text"
                        placeholder="What is happening?!"
                        value={createTweetContent}
                        onChange={(e) => setCreateTweetContent(e.target.value)}
                    ></textarea>
                </div>

                <div></div>

                <ActionsSection createTweetContent={createTweetContent} />
            </form>
        </div>
    )
}