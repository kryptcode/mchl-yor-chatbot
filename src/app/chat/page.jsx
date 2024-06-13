"use client"
import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:8000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.response }]);
    setInput("");
  };

  return (
    <main className="h-screen flex flex-col w-full">
      <div className=" border-b py-5 h-[15vh] ">
        <h5 className=" text-center text-lg font-medium">Mental Bot</h5>
        <div className="flex space-x-1.5 text-sm mt-2 items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-green-600" />
          <span>Online</span>
        </div>
      </div>

      <div className="flex-grow w-[90%] mx-auto flex flex-col h-[85vh]">

      <div className="flex-grow bg-black overflow-y-scroll">
        {messages.map((msg, index) => (
          <div className="space-y-4" key={index}>
            <p>
              <strong>You:</strong> {msg.user}
            </p>
            <p>
              <strong>Bot:</strong> {msg.bot}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-3 lg:w-[70%] space-x-8 mx-auto ">
      <input
        type="text"
        value={input}
        className="bg-neutral-200 w-full px-5 py-1 rounded-md"
        placeholder="Ask me anything..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage} className="bg-[#163748] text-white px-5 py-1 rounded-md ">Send</button>
      </div>
      </div>
    </main>
  );
};

export default ChatPage;
