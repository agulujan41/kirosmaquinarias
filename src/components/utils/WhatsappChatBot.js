import React from 'react'

const WhatsappChatBot = () => {
  return (
    <>
     <button className="chatbot-toggler" id="whatsappToggler">
      <span className="material-symbols-rounded">Call</span>
      <span className="material-symbols-outlined">close</span>
    </button>
    <div className="chatbot" id='chatbotWhatsapp'>
      <header>
        <h2>Chatbot</h2>
        <span className="close-btn material-symbols-outlined">close</span>
      </header>
      <ul className="chatbox">
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Buenas 👋<br/>¿Como puedo ayudarte hoy?</p>
        </li>
      </ul>
      <div className="chat-input">
        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
        <span id="send-btn" className="material-symbols-rounded">send</span>
      </div>
    </div>
    </>
  )
}

export default WhatsappChatBot
