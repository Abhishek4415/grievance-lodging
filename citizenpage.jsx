import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/citizenpage.css'; // Import the CSS file for styling
import Navigation from './othersection';
const CitizenPage = () => {
    const [messages, setMessages] = useState(['Hi']);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        // Add user message to chat
        const userMessage = { text: input, type: 'user' };
        setMessages([...messages, userMessage]);

        // Send message to backend
        try {
            const response = await axios.post('https://your-backend-url/webhook', {
                queryInput: {
                    text: {
                        text: input,
                        languageCode: 'en',
                    },
                },
            });

            const botMessage = { text: response.data.fulfillmentText, type: 'bot' };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setInput('');
    };
    return (
        <div className="citizen-page">
            {/* Navigation Bar */}
            <Navigation/>

            {/* Main Content */}
            <div className="content">
                {/* Sidebar */}
                <div className="sidebar">
                    <nav className="sidebar-nav">
                        <Link to="/citizen" className="sidebar-link">Chatbot</Link>
                        <Link to="/profile" className="sidebar-link">Profile</Link>
                        <Link to="/analytics" className="sidebar-link">Analytics</Link>
                        <Link to="/complaint" className="sidebar-link">Lodge a Complaint</Link>
                    </nav>
                </div>

                {/* Main Area */}
                <div className="main-area">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type hi message here..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
                </div>
            </div>
    );
};

export default CitizenPage;
