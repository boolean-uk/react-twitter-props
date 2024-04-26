import MenuItem from "./MenuItem"

function MenuItems() {
    return (
        <>
            <MenuItem className1={"menu-item active"} className2={"fa-solid fa-house"} text={'Home'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-magnifying-glass"} text={'Explore'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-bell"} text={'Notifications'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-envelope"} text={'Messages'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-bars"} text={'Lists'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-bookmark"} text={'Bookmarks'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-circle-check"} text={'Verified'} />

            <MenuItem className1={"menu-item"} className2={"fa-regular fa-user"} text={'Profile'} />

            <MenuItem className1={"menu-item"} className2={"fa-solid fa-ellipsis"} text={'More'} />
        </>
    )
}

export default MenuItems