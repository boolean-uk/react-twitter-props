import AddTweet from './AddTweet.jsx'
import Tweets from './Tweets.jsx'

import { useState } from 'react'

export default function Middle({loggedInUser, tweets}) {
    
    console.log(tweets)
    
    const [createTweetContent, setCreateTweetContent] = useState('')
    
    
    
    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }


    
    return (
        <main>
            <div className="top-bar">
                <h2 className="title">Home</h2>
            </div>

            <div className="create-tweet">
            <AddTweet addTweet = {addTweet} loggedInUser={loggedInUser} createTweetContent = {createTweetContent} setCreateTweetContent={setCreateTweetContent}/>
            </div>

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>
            
            <Tweets tweets={tweets}/>

        </main>
    )
}
