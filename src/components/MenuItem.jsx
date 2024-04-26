function MenuItem({ className1, text, className2 }) {
    return (
        <div className={className1}>
            <a href="#">
                <i className={className2}></i>
                {text}
            </a>
        </div>
    )
}

export default MenuItem