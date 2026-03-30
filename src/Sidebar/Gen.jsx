
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
<>




    
    <div className="chat-container">


 <header className="topbar">
        <h2 className="university">University Digital Platform</h2>
        <div className="user-info">
          <Link to="/Home">  <button className="button-2"> Back </button></Link>
          <span>Welcome Student</span>
        </div>
      </header><br></br><br></br><br></br>


      <h2 className="chat-title">🤖 UDP Nexus AI Assistant</h2>

      <div className="chat-box">

        {chat.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-msg" : "ai-msg"}
          >
            {msg.text}
          </div>
        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /><br></br>

        <button onClick={sendMessage}> ➤</button>






      </div>
      

    </div>
    




    </>
  );
}

export default Gen;





