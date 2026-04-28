import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { inferPlant } from '../../utils/chatbot/inferenceEngine';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm the Flora Expert System. Ask me about plant care!",
      isBot: true,
      explanation: "I can help with watering, sunlight, indoor/outdoor plants, and more."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue('');

    // Process with inference engine
    const inference = inferPlant(text.toLowerCase());

    // Add bot message after a slight delay for better UX
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: inference.answer,
        isBot: true,
        explanation: inference.explanation
      }]);
    }, 400);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-widget">
      <div className={`chatbox-container ${isOpen ? 'open' : 'closed'}`}>
        <div className="chatbox-header">
          <h1>🌿 Flora Expert System</h1>
          <p>Plantation Guidance Chatbot</p>
          <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
        </div>

        <div className="chatbox-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.isBot ? 'bot' : 'user'}`}>
              {/* Using dangerouslySetInnerHTML because the inference engine returns HTML tags like <b> and <br> */}
              <div dangerouslySetInnerHTML={{ __html: msg.text }} />
              {msg.isBot && msg.explanation && (
                <small>{msg.explanation}</small>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chatbox-input-area">
          <div className="chatbox-input-row">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about plant care..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
          <p className="chatbox-hint">💬 Try: "indoor plant", "low water", "mango"…</p>
        </div>
      </div>

      {!isOpen && (
        <button className="chatbox-toggle-btn" onClick={() => setIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '32px', height: '32px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Chatbot;
