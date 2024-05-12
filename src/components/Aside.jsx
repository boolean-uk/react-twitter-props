import MenuItem from "./MenuItem"

export default function Aside(props) {
    return (
        <aside className="left-side">
        <div className="logo">
            <i className="fa-brands fa-twitter"></i>
        </div>

        <MenuItem title="Home" active={true} icon="fa-house"/>
        <MenuItem title="Explore" active={false} icon="fa-magnifying-glass"/>
        <MenuItem title="Notifications" active={false} icon="fa-bell"/>
        <MenuItem title="Messages" active={false} icon="fa-envelope"/>
        <MenuItem title="Lists" active={false} icon="fa-bars"/>
        <MenuItem title="Bookmarks" active={false} icon="fa-bookmark"/>
        <MenuItem title="Verified" active={false} icon="fa-circle-check"/>
        <MenuItem title="Profile" active={false} icon="fa-user"/>
        <MenuItem title="More" active={false} icon="fa-ellipsis"/>



        <button className="tweet-btn">Tweet</button>

        <div className='profile-card'>
            <div className="profile-icon"><img src={props.loggedInUser.profileImage}/></div>

            <div className="profile-details">
                <h4>{props.loggedInUser.name}</h4>
                <small>{props.loggedInUser.handle}</small>
            </div>

            <div className="action">
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    </aside>
    )
}