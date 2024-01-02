import React from 'react'

const ChatBot = () => {
  return (
    <>
    <button className="chatbot-toggler">
      <span className="material-symbols-rounded">mode_comment</span>
      <span className="material-symbols-outlined">close</span>
    </button>
    <div className="chatbot">
      <header>
        <h2>Chatbot</h2>
        <span className="close-btn material-symbols-outlined">close</span>
      </header>
      <ul className="chatbox">
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
        </li>
          <p>Buenas <span role='img'>👋<br/></span>¿Como puedo ayudarte hoy?</p>
      </ul>
      <div className="chat-input">
        <textarea placeholder="Enter a message..." spellCheck="false" required></textarea>
        <span id="send-btn" className="material-symbols-rounded">send</span>
      </div>
    </div>
    </>
    
  )
}

export default ChatBot
