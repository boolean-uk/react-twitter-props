import MenuItem from "./MenuItem"
import ProfileCard from "./ProfileCard"

function LeftSide({ loggedInUser }) {
    return (
        <aside className="left-side">
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <MenuItem className1={"menu-item active"} className2={"fa-solid fa-house"} text={'Home'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-magnifying-glass"} text={'Explore'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-bell"} text={'Notifications'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-envelope"} text={'Messages'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-bars"} text={'Lists'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-bookmark"} text={'Bookmarks'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-circle-check"} text={'Verified'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-user"} text={'Profile'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-ellipsis"} text={'More'} />

            <button className="tweet-btn">Tweet</button>

            <div className='profile-card'>
                <ProfileCard 
                    name={loggedInUser.name} 
                    handle={loggedInUser.handle} 
                    image={loggedInUser.profileImage} 
                    className1={"profile-icon"} 
                    className2={"profile-details"} 
                />

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </aside>
    )
}

export default LeftSide