export default function FollowBack({user, key}) {
    return (
        <div className="follow-block" key={key}>
            <div className="icon"><img src={user.profileImage}/></div>

            <div className="content">
                <h4>{user.name}</h4>
                <h5>{user.handle}</h5>
            </div>

            <div className="action">
                <button className="follow-btn">Follow</button>
            </div>
        </div>
    )
}