export default function MenuItem(props) {
    return (
        <div className={`menu-item ${props.active? "active": ""}`}>
        <a href="#">
            <i className={`fa-solid ${props.icon}`}></i>
            {props.title}
        </a>
    </div>
    )
}