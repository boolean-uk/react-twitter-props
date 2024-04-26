export default function UserCard({ username, imgsrc, name, textClass, iconClass }) {
  return (
    <>
      <div className={iconClass}>
        <img src={imgsrc} />
      </div>

      <div className={textClass}>
        <h4>{name}</h4>
        <small>{username}</small>
      </div>
    </>
  );
}
