import React from 'react';

const LandingPage = () => {
  const handleStartChat = () => {
    // Add code to trigger the chat component to load
  };

  return (
    <div>
      <h1>Welcome to Our Chat Service</h1>
      <p>Get started by clicking the "Start Chat" button below!</p>
      <button onClick={handleStartChat}>Start Chat</button>
    </div>
  );
};

export default LandingPage;