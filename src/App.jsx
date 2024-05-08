import { useState } from 'react'
import MenuItem from './components/MenuItem.jsx'
import Tweet from './components/Tweet.jsx'
import RightSide from './components/RightSide.jsx'

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
            
            <aside className="left-side">
                <div className="logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>

                <MenuItem title="Home" active={true} icon="fa-house"/>






                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Explore
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bell"></i>
                        Notifications
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-envelope"></i>
                        Messages
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-bars"></i>
                        Lists
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bookmark"></i>
                        Bookmarks
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-circle-check"></i>
                        Verified
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-user"></i>
                        Profile
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-ellipsis"></i>
                        More
                    </a>
                </div>

                <button className="tweet-btn">Tweet</button>

                <div className='profile-card'>
                    <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>

                    <div className="profile-details">
                        <h4>{loggedInUser.name}</h4>
                        <small>{loggedInUser.handle}</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </aside>

            <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <div className='create-tweet'>
                    <form onSubmit={addTweet}>
                        <div className="avatar-section">
                            <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>
                        </div>

                        <div className="textarea-section">
                            <textarea
                                className="content"
                                type="text"
                                placeholder="What is happening?!"
                                value={createTweetContent}
                                onChange={(e) => setCreateTweetContent(e.target.value)}
                            ></textarea>
                        </div>

                        <div></div>

                        <div className="actions-section">
                            <div className="actions">
                                <i className="fa-regular fa-image action-icon"></i>
                                <i className="fa-solid fa-list action-icon"></i>
                                <i className="fa-regular fa-face-smile action-icon"></i>
                                <i className="fa-regular fa-calendar action-icon"></i>
                                <i className="fa-solid fa-location-dot action-icon"></i>
                            </div>

                            <button type="submit" disabled={createTweetContent.length < 1} className="tweet-btn">Tweet</button>
                        </div>
                    </form>
                </div>

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
