import React, { useState } from "react";
import { Link } from "react-router-dom";

function Gen() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };

    setChat([...chat, userMessage]);

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    const aiMessage = { sender: "ai", text: data.reply };

    setChat(prev => [...prev, aiMessage]);

    setMessage("");
  };

  return (
    <div className="gen-page">
      <header className="topbar">
        <h2 className="university">University Digital Platform</h2>
        <div className="user-info">
          <Link to="/Home">
            <button className="button-2">Back</button>
          </Link>
          <span className="welcome-text">Welcome Student</span>
        </div>
      </header>

      <main className="gen-content">
        <section className="assistant-card">
          <div className="assistant-card__header">
            <div>
              <p className="assistant-eyebrow">AI Support</p>
              <h1 className="assistant-title">🤖 UDP Nexus AI Assistant</h1>
              <p className="assistant-copy">Ask anything about the university platform and get instant help.</p>
            </div>
            <span className="assistant-badge">Live</span>
          </div>

          <div className="chat-box">
            {chat.length === 0 ? (
              <div className="chat-empty">Start the conversation by typing a question below.</div>
            ) : (
              chat.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "user" ? "user-msg" : "ai-msg"}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} aria-label="Send message">➤</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Gen;
