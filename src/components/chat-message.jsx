'use client';

import { useEffect, useRef } from 'react';

export default function ChatMessage({ message }) {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  return (
    <div 
      ref={messageRef}
      className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
    >
      <div className="message-content">
        {message.text}
      </div>
      <div className="message-sender">
        {message.sender === 'user' ? 'You' : 'Bot'}
      </div>
    </div>
  );
}