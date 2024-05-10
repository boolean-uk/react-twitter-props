import { useState } from 'react'

// The initial tweet objects that should be displayed

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components

import LeftSide from './components/LeftSide.jsx'
import MainContent from './components/MainContent.jsx'
import RightSide from './components/RightSide.jsx'

function App() {
    const [loggedInUser] = useState({user})
    return (
        <div className="container">
            
            <LeftSide loggedInUser = {loggedInUser}/>
            
            <MainContent loggedInUser = {loggedInUser} />

            <RightSide/>

        </div>
    )
}

export default App
