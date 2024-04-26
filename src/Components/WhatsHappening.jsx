export default function WhatsHappening({user, index}) {
    return (
        <div className="news-block" key={index}>
            <div className="content">
                <small>Entertainment · Trending</small>
                <h4>{user.name}</h4>
                <small>{user.totalTweets}</small>
            </div>

            <div className="action">
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    )
}