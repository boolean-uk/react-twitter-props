import TweetFunctions from './TweetFunctions'

export default function TweetForm ({ addTweet, loggedInUser, createTweetContent, setCreateTweetCOntent }) {
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

                        <TweetFunctions createTweetContent={createTweetContent} />
                    </form>
                </div>
    )
}