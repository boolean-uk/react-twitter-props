import { useState } from 'react'
import Tweet from './components/Tweet.jsx'
import RightSide from './components/RightSide.jsx'
import CreateTweet from './components/CreateTweet.jsx'
import Aside from './components/Aside.jsx'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'



function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
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
        <div className="container">
            
<Aside loggedInUser={loggedInUser}/>

            <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <CreateTweet 
                addTweet={addTweet} 
                loggedInUser={loggedInUser} 
                createTweetContent={createTweetContent} 
                setCreateTweetContent={setCreateTweetContent}
                />

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                {tweets.map((tweet, index) => {
                    return (
                       <Tweet key={index} tweet={tweet}/>
                    )
                })}
            </main>

<RightSide/>

        </div>
    )
}

export default App
