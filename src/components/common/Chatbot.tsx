import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minimize2, Maximize2, Bot, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import faviconImg from '../../assets/Favicon.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  buttons?: Array<{ label: string; action: string }>;
}

interface BotResponse {
  text: string;
  buttons?: Array<{ label: string; action: string }>;
}

export const Chatbot: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the Azaroth Tech-Hive assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isMinimized]);

  const generateBotResponse = (userMessage: string): BotResponse => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('product') || lowerMessage.includes('platform')) {
      return {
        text: 'We offer 4 enterprise software platforms: Fitness Management System, Multi-Store E-Commerce Platform, Learning Management Platform, and Healthcare Management System. You can learn more about each on our Products page.',
      };
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('consulting')) {
      return {
        text: 'We provide comprehensive software engineering services including Digital Transformation, Strategic Consulting, On-Demand Workforce Solutions, and Business Process Management. Visit our Services page for details.',
      };
    }
    if (lowerMessage.includes('quote') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return {
        text: 'For pricing and quotes, please use our Request for Quote form. Our team will review your requirements and provide a detailed proposal.',
      };
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return {
        text: 'You can reach us at hello@azaroth-techhive.com or call +91 6379480931. You can also use our Contact form for inquiries.',
      };
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
      return {
        text: 'Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions, delivering end-to-end engineering excellence. We\'re based in Chennai, India.',
      };
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        text: 'Hello! Welcome to Azaroth Tech-Hive. How can I assist you with your software engineering needs today?',
      };
    }
    if (lowerMessage.includes('thank')) {
      return {
        text: 'You\'re welcome! Is there anything else I can help you with?',
      };
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return {
        text: 'Thank you for chatting with us! Feel free to reach out anytime. Have a great day!',
      };
    }

    // Generic fallback - show navigation buttons
    return {
      text: 'I\'d be happy to help! You can ask me about our products, services, pricing, or how to contact us.',
      buttons: [
        { label: 'View Products', action: '/products' },
        { label: 'View Services', action: '/services' },
        { label: 'Contact Us', action: '/connect-with-us' },
        { label: 'Request Quote', action: '/request-for-quote' },
      ],
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const response = generateBotResponse(inputText);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        buttons: response.buttons,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleButtonClick = (action: string) => {
    navigate(action);
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            backgroundColor: '#7A0C16',
            color: '#ffffff',
            border: '2px solid #D4AF37',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(122, 12, 22, 0.4)',
            transition: 'all 180ms ease-out',
            zIndex: 1000,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(122, 12, 22, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(122, 12, 22, 0.4)';
          }}
        >
          <MessageSquare size={20} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: isMinimized ? '300px' : '400px',
            maxWidth: 'calc(100vw - 4rem)',
            maxHeight: isMinimized ? 'auto' : '600px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(122, 12, 22, 0.15)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 180ms ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#7A0C16',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={faviconImg}
                alt="Azaroth Assistant"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '8px',
                  objectFit: 'contain',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                }}
              />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9375rem' }}>
                  Azaroth Assistant
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem' }}>
                  Online
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div
                style={{
                  flex: 1,
                  padding: '1rem',
                  overflowY: 'auto',
                  backgroundColor: '#fafaf7',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  maxHeight: '400px',
                }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    {message.sender === 'bot' && (
                      <img
                        src={faviconImg}
                        alt="Azaroth Assistant"
                        style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '6px',
                          objectFit: 'contain',
                          flexShrink: 0,
                          boxShadow: '0 1px 4px rgba(122, 12, 22, 0.25)',
                        }}
                      />
                    )}
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        backgroundColor: message.sender === 'user' ? '#7A0C16' : '#ffffff',
                        color: message.sender === 'user' ? '#ffffff' : '#1f2937',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {message.text}
                      <div
                        style={{
                          fontSize: '0.6875rem',
                          marginTop: '0.25rem',
                          opacity: 0.7,
                        }}
                      >
                        {formatTime(message.timestamp)}
                      </div>
                      {message.buttons && message.buttons.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                            marginTop: '0.75rem',
                          }}
                        >
                          {message.buttons.map((button, index) => (
                            <button
                              key={index}
                              onClick={() => handleButtonClick(button.action)}
                              style={{
                                padding: '0.5rem 0.75rem',
                                borderRadius: '6px',
                                border: '1px solid #7A0C16',
                                backgroundColor: '#ffffff',
                                color: '#7A0C16',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 180ms ease-out',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#7A0C16';
                                e.currentTarget.style.color = '#ffffff';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                                e.currentTarget.style.color = '#7A0C16';
                              }}
                            >
                              {button.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.sender === 'user' && (
                      <div
                        style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          backgroundColor: '#D4AF37',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <User size={14} style={{ color: '#1f2937' }} />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        backgroundColor: '#7A0C16',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Bot size={14} style={{ color: '#D4AF37' }} />
                    </div>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        gap: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#7A0C16',
                          animation: 'bounce 1.4s infinite ease-in-out both',
                        }}
                      />
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#7A0C16',
                          animation: 'bounce 1.4s infinite ease-in-out both 0.2s',
                        }}
                      />
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#7A0C16',
                          animation: 'bounce 1.4s infinite ease-in-out both 0.4s',
                        }}
                      />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div
                style={{
                  padding: '1rem',
                  borderTop: '1px solid rgba(122, 12, 22, 0.1)',
                  backgroundColor: '#ffffff',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-end',
                  }}
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(122, 12, 22, 0.2)',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 180ms ease-out',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#7A0C16';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.2)';
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: inputText.trim() ? '#7A0C16' : 'rgba(122, 12, 22, 0.3)',
                      color: '#ffffff',
                      cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 180ms ease-out',
                    }}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Add bounce animation keyframes */}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};
