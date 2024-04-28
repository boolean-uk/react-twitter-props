export default function ProfileCard({loggedInUser}) {
    return (
    <div className='profile-card'>
      <div className="profile-icon"><img src={loggedInUser.profileImage} alt="Profile"/></div>
      <div className="profile-details">
        <h4>{loggedInUser.name}</h4>
        <small>{loggedInUser.handle}</small>
      </div>
      <div className="action">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
    )
}