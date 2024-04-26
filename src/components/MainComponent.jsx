import Tweet from './Tweet.jsx'
import CreateTweetForm from './CreateTweetForm.jsx'

function MainComponent({ loggedInUser, tweets, setTweets }) {


    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <div className='create-tweet'>
                <CreateTweetForm loggedInUser={loggedInUser} setTweets={setTweets} tweets={tweets} />
            </div>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => {
                return (
                    <Tweet key={index} tweet={tweet} />
                )
            })}
        </main>
    )
}

export default MainComponent