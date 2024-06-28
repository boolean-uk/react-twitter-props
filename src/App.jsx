import React from 'react';
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';
import './index.css';

function App() {
  return (
    <div className="container">
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>
  );
}

export default App;
