export default function NewsBlock() {
    return (
        <>
            <div className="news-block">
                <div className="content">
                    <small>Entertainment · Trending</small>
                    <h4>Elon Musk</h4>
                    <small>14.5k Tweets</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>

            <div className="news-block">
                <div className="content">
                    <small>Cage Fights · Trending</small>
                    <h4>Mark Zuckerberg</h4>
                    <small>59.1k Tweets</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </>
    )
}