import Tweets from './Tweets.jsx'

import NewTweet from './NewTweet.jsx'

import tweets from './assets/data/tweets.js'
function MainComponent({loggedInUser, createTweetContent, addTweet, tweets, setCreateTweetContent}){
return(<main>
    <div className='top-bar'>
        <h2 className="title">Home</h2>
    </div>

   <Tweets
   loggedInUser={loggedInUser}
   addTweet={addTweet}
   tweets={tweets}
   setCreateTweetContent={setCreateTweetContent}
   createTweetContent={createTweetContent}
   />

    <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
    </div>

    {tweets.map((tweet, index) => {
       <NewTweet 
       key={index} tweet={tweet}/>
    })}
</main>
)

}
export default MainComponent