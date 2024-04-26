import { useState } from 'react'

// The initial tweet objects that should be displayed


// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import imgElon from './assets/images/elon.jpg'
import imgZuck from './assets/images/zuck.jpg'
import LeftSide from './LeftSide.jsx'
import Middle from './Middle.jsx'
import RightSide from './RightSide.jsx'

function App() {
    const [loggedInUser] = useState(user)
    

    

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser}/>

            <Middle loggedInUser={loggedInUser} />

            <RightSide/>
        </div>
    )
}

export default App
