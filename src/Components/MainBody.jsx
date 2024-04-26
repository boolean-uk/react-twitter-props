import CreateTweet from "./CreateTweet"
import Tweets from "./Tweets"

export default function MainBody({loggedInUser, tweets, createTweetContent, addTweet, setCreateTweetContent}) {
    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet loggedInUser={loggedInUser} createTweetContent={createTweetContent} addTweet={addTweet} setCreateTweetContent={setCreateTweetContent}/>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => {
                return (
                    <Tweets tweet={tweet} key={index}/>
                )
            })}
        </main>
    )
}