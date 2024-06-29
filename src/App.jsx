import { useState } from "react";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import Left from "./Left.jsx";
import Middle from "./Middle.jsx";
import Right from "./Right.jsx";

function App() {
  const [loggedInUser] = useState(user);

  return (
    <div className="container">
      <Left loggedInUser={loggedInUser} />
      <Middle loggedInUser={loggedInUser} />
      <Right />
    </div>
  );
}

export default App;
