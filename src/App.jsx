import { useState } from 'react'

// The initial tweet objects that should be displayed


// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import LeftSide from './LeftSide.jsx'
import Middle from './Middle.jsx'
import RightSide from './RightSide.jsx'
import initialTweets from './assets/data/tweets.js'

const getSearchResults = (tweets, searchValue) => tweets.filter((tweet) => tweet.content.includes(searchValue))

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [searchValue, setSearchValue] = useState('')
    const [activeTweets, setActiveTweets] = useState(tweets)

    let filteredTweets = tweets
    if(searchValue){
        filteredTweets = getSearchResults(filteredTweets, searchValue)
    }

    

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser}/>

            <Middle loggedInUser={loggedInUser} tweets={filteredTweets} />

            <RightSide setSearchValue={setSearchValue} searchValue={searchValue} />
        </div>
    )
}

export default App
