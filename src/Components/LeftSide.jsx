import LeftMenuButton from "./LeftMenuButton"
import ProfileCard from "./ProfileCard"


export default function LeftSide({ loggedInUser }) {

    return (
        <aside className="left-side">
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <LeftMenuButton btnClass={'menu-item active'} iconClass={"fa-solid fa-house"} text={'Home' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-solid fa-magnifying-glass"} text={'Explore' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-regular fa-bell"} text={'Notifications' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-regular fa-envelope"} text={'Messages' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-solid fa-bars"} text={'Lists' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-regular fa-bookmark"} text={'Bookmarks' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-regular fa-circle-check"} text={'Verified' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-regular fa-user"} text={'Profile' } />
            <LeftMenuButton btnClass={'menu-item'} iconClass={"fa-solid fa-ellipsis"} text={'More' } />

            <button className="tweet-btn">Tweet</button>

            <ProfileCard loggedInUser={loggedInUser} />

        </aside>
    )
}