import { useState } from "react";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

// You may need to move these when creating new components
import Feed from "./Feed.jsx";
import RightSide from "./RightSide.jsx";
import LeftSide from "./LeftSide.jsx";

function App() {
	const [loggedInUser] = useState(user);

	return (
		<div className="container">
			<LeftSide loggedInUser={loggedInUser} />
			<Feed loggedInUser={loggedInUser} />
			<RightSide />
		</div>
	);
}

export default App;
