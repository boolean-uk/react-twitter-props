export default function ActionsSection({ createTweetContent }) {
    return (
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
    )
}