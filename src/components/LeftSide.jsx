import MenuItem from "./MenuItem"
import MenuItems from "./MenuItems"
import ProfileCard from "./ProfileCard"

function LeftSide({ loggedInUser }) {
    return (
        <aside className="left-side">
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <MenuItems />

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