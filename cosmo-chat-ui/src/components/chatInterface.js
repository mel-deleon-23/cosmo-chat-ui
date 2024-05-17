import React, { useState, useEffect } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);

  // Establish web socket connection when the component mounts
  useEffect(() => {
    const newSocket = new WebSocket('wss://chat-server-url'); // Replace with your chat server URL
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSendMessage = () => {
    // Send the newMessage to the chat server via the web socket connection
    if (socket && newMessage.trim() !== '') {
      socket.send(newMessage);
      setMessages([...messages, { text: newMessage, type: 'outgoing' }]);
      setNewMessage(''); // Clear the input field after sending the message
    }
  };

  // Handle incoming messages from the chat server
  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const incomingMessage = event.data;
        setMessages([...messages, { text: incomingMessage, type: 'incoming' }]);
      };
    }
  }, [socket, messages]);

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