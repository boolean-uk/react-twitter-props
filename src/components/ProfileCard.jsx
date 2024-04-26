function ProfileCard({ name, handle, image, className1, className2 }) {
    return (
        <>
            <div className={className1}><img src={image}/></div>

            <div className={className2}>
                <h4>{name}</h4>
                <h5>{handle}</h5>
            </div>
        </>

    )
}

export default ProfileCard