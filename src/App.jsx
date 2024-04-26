import { useState } from 'react'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

import LeftSide from './components/LeftSide.jsx'
import Middle from './components/Middle.jsx'
import RightSide from './components/RightSide.jsx'

function App() {
    const [loggedInUser] = useState(user)
    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser}></LeftSide>
            <Middle loggedInUser={loggedInUser}></Middle>
            <RightSide></RightSide>

        </div>
    )
}

export default App
