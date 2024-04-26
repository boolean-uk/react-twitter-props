import CreateTweetForm from "./CreateTweetForm";
import Tweets from "./Tweets";

export default function MainContent({ addTweet, loggedInUser, createTweetContent, setCreateTweetContent, tweets, searchFilter }) {
    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweetForm 
                addTweet={addTweet}
                loggedInUser={loggedInUser}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
            />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            <Tweets 
                tweets={tweets}
                searchFilter={searchFilter} 
            />
        </main>
    )
}