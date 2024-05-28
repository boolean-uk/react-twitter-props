import TweetForm from "./TweetForm"
import TwitterFeed from "./TwitterFeed"

export default function MainSection ({addTweet, loggedInUser, createTweetContent, setCreateTweetContent
    ,tweets , searchFilter}) {
    return (
        <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <TweetForm
                    addTweet={addTweet}
                    loggedInUser={loggedInUser}
                    createTweetContent={createTweetContent}
                    setCreateTweetContent={setCreateTweetContent}
                />

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                <TwitterFeed 
                tweets={tweets}
                searchFilter={searchFilter}
                />
            </main>
      )      
}
    


