'use client';

import { useState } from 'react';
import ChatMessage from './chat-message';
import LanguageSelector from './language-selector';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('english');

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'user' }]);
      
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input, language }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to get response');
        }
  
        const data = await response.json();
        if (data.error) {
          console.error('Error from API:', data.error);
          throw new Error(data.error);
        }
        setMessages(prev => [...prev, { text: data.result, sender: 'bot' }]);
      } catch (error) {
        console.error('Error details:', error);
        setMessages(prev => [...prev, { text: "Sorry, I couldn't process that request.", sender: 'bot' }]);
      }
  
      setInput('');
    }
  };

  return (
    <div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}