import { useState } from 'react'

// Tweets Displayed
import initialTweets from './assets/data/tweets.js'

// Pretend user sign-in
import user from './assets/data/user.js'

import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'
import MainComponent from './components/MainComponent.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [searchInput, setSearchInput] = useState('')
    const [tweets, setTweets] = useState(initialTweets)

    const filteredTweets = tweets.filter((t) => Object.values(t).toLocaleString().toLocaleLowerCase().includes(searchInput))

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser} />

            <MainComponent loggedInUser={loggedInUser} tweets={filteredTweets} setTweets={setTweets} />

            <RightSide setSearchInput={setSearchInput} searchInput={searchInput} />

        </div>
    )
}

export default App