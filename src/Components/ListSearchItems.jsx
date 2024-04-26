export default function ListSearchItems({ tweet, index }) {
  console.log("ListSearchItems functions running");
  return (
    <li key={index}>
      <div className="icon">
        <img src={tweet.profileImage} />
      </div>

      <div className="content">
        <h4>{tweet.name}</h4>
        <h5>{tweet.handle}</h5>
      </div>
    </li>
  );
}
