import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'
import MainComponent from './components/MainComponent.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [searchInput, setSearchInput] = useState('')
    const [tweets, setTweets] = useState(initialTweets)

    const filteredTweets = tweets.filter((t) => Object.values(t).toLocaleString().toLocaleLowerCase().includes(searchInput))

    console.log(filteredTweets)
    console.log(searchInput)

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser} />

            <MainComponent loggedInUser={loggedInUser} tweets={filteredTweets} setTweets={setTweets} />

            <RightSide setSearchInput={setSearchInput} searchInput={searchInput} />

        </div>
    )
}

export default App
