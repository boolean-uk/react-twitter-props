import ProfileCard from "./ProfileCard"

function FollowBlock({ image, name, handle }) {
    return (
        <div className="follow-block">
            <ProfileCard image={image} name={name} handle={handle} className1={"icon"} className2={"content"} />

            <div className="action">
                <button className="follow-btn">Follow</button>
            </div>
        </div>
    )
}

export default FollowBlock