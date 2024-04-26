import { useState } from 'react'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'
import MainComponent from './components/MainComponent.jsx'

function App() {
    const [loggedInUser] = useState(user)

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser} />

            <MainComponent loggedInUser={loggedInUser} />

            <RightSide />

        </div>
    )
}

export default App
