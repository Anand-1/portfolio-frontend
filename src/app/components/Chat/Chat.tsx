'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Chat.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      id: '2',
      text: 'I\'m interested in your portfolio projects',
      sender: 'user',
      timestamp: new Date(Date.now() - 4 * 60000),
    },
    {
      id: '3',
      text: 'Great! I have experience with React, Next.js, TypeScript, and full-stack development. Feel free to explore my projects section to see my work.',
      sender: 'bot',
      timestamp: new Date(Date.now() - 3.5 * 60000),
    },
    {
      id: '4',
      text: 'That\'s impressive. Do you work on freelance projects?',
      sender: 'user',
      timestamp: new Date(Date.now() - 2.5 * 60000),
    },
    {
      id: '5',
      text: 'Yes, I do! I\'m available for freelance work and would love to discuss your project requirements. You can reach out via the contact page or continue chatting here.',
      sender: 'bot',
      timestamp: new Date(Date.now() - 1.5 * 60000),
    },
    {
      id: '6',
      text: 'Perfect! I\'ll check out your projects and contact you soon.',
      sender: 'user',
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: '7',
      text: 'Looking forward to hearing from you! Feel free to ask if you have any questions. 😊',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message! I will get back to you soon.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>Chat with us</h2>
        <p className={styles.subtitle}>We're here to help</p>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.sender]}`}
          >
            <div className={styles.messageContent}>{message.text}</div>
            <span className={styles.timestamp}>
              {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.bot}`}>
            <div className={styles.messageContent}>
              <span className={styles.typingDot}></span>
              <span className={styles.typingDot}></span>
              <span className={styles.typingDot}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className={styles.inputForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={styles.sendButton}
          disabled={isLoading || !inputValue.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
