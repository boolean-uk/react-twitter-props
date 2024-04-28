import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

import LeftSide from './Components/LeftSide.jsx'
import MainSection from './Components/MainSection.jsx'
import RightSide from './Components/RightSide.jsx'


function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [searchInput, setSearchInput] = useState('')



    function searchResult(tweets, searchInput) {
        return tweets.filter(tweet => tweet.content.toLowerCase().includes(searchInput))
    }
    const filteredTweets = searchResult(tweets, searchInput)



    return (
        <div className="container">            

            <LeftSide loggedInUser={loggedInUser} />

            <MainSection loggedInUser={loggedInUser} tweets={filteredTweets} setTweets={setTweets} />

            <RightSide searchInput={searchInput} setSearchInput={setSearchInput} />

        </div>
    )
}

export default App
