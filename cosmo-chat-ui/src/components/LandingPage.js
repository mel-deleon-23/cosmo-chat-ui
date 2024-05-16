import React from 'react';

const LandingPage = ({ handleStartChat }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Chat Interface</h1>
      <p>Click the button below to start the chat</p>
      <button onClick={handleStartChat}>Start Chat</button>
    </div>
  );
};

export default LandingPage;