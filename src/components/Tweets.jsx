import Tweet from "./Tweet"

export default function Tweets( {tweets} ){
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