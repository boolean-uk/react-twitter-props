import { useState } from "react"
import ComposeActions from "./ComposeActions"


export default function ComposeTweet({loggedInUser, tweets, setTweets }){
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
                        onChange={(e) => setCreateTweetContent(e.target.value)}>                    
                    </textarea>
                </div>

                <div></div>

                <div className="actions-section">
                    <ComposeActions/>
                    <button type="submit"
                        disabled={createTweetContent.length < 1}
                        className="tweet-btn">
                        Tweet
                    </button>
                </div>
            </form>
    )
}