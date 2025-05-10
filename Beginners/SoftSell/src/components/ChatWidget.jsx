import React, { useState } from 'react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'You are a helpful assistant for license-related questions.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const getHardcodedResponse = (userMessage) => {
    // Define some hardcoded answers based on the user's message
    const responses = {
      'How do I sell my license?':
        'To sell your license, you need to follow these steps...',
      'What is the refund policy?':
        'Our refund policy allows you to request a refund within 30 days...',
      'Can I transfer my license?':
        'Yes, you can transfer your license by contacting customer support...',
    };

    return (
      responses[userMessage] ||
      "I am sorry, I didn't understand your question. Can you please rephrase?"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    // Get the hardcoded response based on user input
    const aiResponse = getHardcodedResponse(input);

    // Simulate "loading" state before showing the response
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: aiResponse,
      };
      setMessages([...updatedMessages, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized); // Toggle the minimized state
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: isMinimized ? 'none' : 'block', // Hide messages when minimized
          maxHeight: '200px',
          overflowY: 'auto',
          marginBottom: '8px',
        }}
      >
        {messages.slice(1).map((msg, i) => (
          <p key={i}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </p>
        ))}
        {loading && (
          <p>
            <strong>AI:</strong> Typing...
          </p>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <h5>Any Queries !! Ask me</h5>
          {!isMinimized && (
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask: How do I sell my license?"
              style={{ width: '100%', padding: '5px' }}
            />
          )}
        </form>
        <button
          onClick={handleMinimize}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          {isMinimized ? '-' : 'X'}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
