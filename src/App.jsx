import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

import LeftSide from './LeftSide.jsx'
import RightSide from './RightSide.jsx'
import Timeline from './Timeline.jsx'

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
                analyticsCount: 0,
            },
            ...tweets,
        ])
    }

    return (
        <div className='container'>
            <LeftSide loggedInUser={loggedInUser} />
            <Timeline
                loggedInUser={loggedInUser}
                tweets={tweets}
                addTweet={addTweet}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
            />
            <RightSide />
        </div>
    )
}

export default App
