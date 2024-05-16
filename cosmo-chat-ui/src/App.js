import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import ChatComponent from './ChatComponent';

const App = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUserData = async () => {
      try {
        // Replace this with your actual API call to fetch user data
        const response = await fetch('https://example.com/api/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const handleStartChat = () => {
    // Perform additional actions before loading the chat component
    if (userData) {
      // If user data is available, start the chat
      setChatStarted(true);
    } else {
      // If user data is not available, handle the situation accordingly
      console.error('User data is not available. Unable to start the chat.');
      // You can display an error message or take other appropriate actions
    }
  };

  return (
    <div className="app">
      {!chatStarted ? (
        <LandingPage handleStartChat={handleStartChat} />
      ) : (
        <ChatComponent userData={userData} />
      )}
    </div>
  );
};

export default App;