import Tweet from './Tweet.jsx'


export default function Tweets({tweets}) {
    return (
        <>
        {tweets.map((tweet, index) => {
            return (
                <Tweet tweet={tweet} key={index}/>
            )
        })}
        </>
    )
}