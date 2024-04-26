import initialTweets from '../assets/data/tweets.js'
import { useState } from 'react'
import Tweets from './Tweets.jsx'
import CreateTweetForm from './CreateTweetForm.jsx'

export default function Middle ({loggedInUser}) {
    const [tweets, setTweets] = useState(initialTweets)
    
    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweetForm loggedInUser={loggedInUser} setTweets={setTweets} tweets={tweets}></CreateTweetForm>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>
            <Tweets tweets={tweets}></Tweets>


        </main>
    )
}