import { useState } from 'react'
import ComposeTweet from './ComposeTweet'
import Feed from './Feed'

export default function MainSection({ loggedInUser, tweets, setTweets }) {
    // const [tweets, setTweets] = useState(initialTweets)


    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <div className='create-tweet'>
                <ComposeTweet loggedInUser={loggedInUser} tweets={tweets} setTweets={setTweets} />
            </div>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>
            
            {tweets.map((tweet, index) => {
                return (
                    <Feed tweet={tweet} key={index} />                    
                )
            })}
        </main>
    )
}