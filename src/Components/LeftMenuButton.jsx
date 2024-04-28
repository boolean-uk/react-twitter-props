export default function LeftMenuButton({btnClass, iconClass, text }) {
    
    return (
        <div className={btnClass}>
            <a href="#">
                <i className={iconClass}></i>
                {text}
            </a>
        </div>
    )
}