import LeftMenuButton from "./LeftMenuButton"
import ProfileCard from "./ProfileCard"

export default function ({ loggedInUser }) {

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
            {/* <LeftMenuButton btnClass={'menu-item active'} iconClass={""} text={'Home' } /> */}


            <button className="tweet-btn">Tweet</button>

            <ProfileCard loggedInUser={loggedInUser}/>
{/* 
            <div className='profile-card'>
                <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>

                <div className="profile-details">
                    <h4>{loggedInUser.name}</h4>
                    <small>{loggedInUser.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div> */}
        </aside>
    )
}