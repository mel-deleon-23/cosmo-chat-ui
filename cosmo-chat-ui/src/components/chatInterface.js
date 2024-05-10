import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Add code to send the newMessage to the chat server
    // You can also update the messages state with the new message
    // Example: setMessages([...messages, { text: newMessage, type: 'outgoing' }]);
    setNewMessage(''); // Clear the input field after sending the message
  };

  return (
    <div>
      <div className="chat-container">
        {/* Display incoming and outgoing messages */}
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;