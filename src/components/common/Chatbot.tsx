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
      text: 'Hello! I\'m the automated Azaroth site guide. Ask me about our platforms, engineering services or how to reach the team.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<number | undefined>(undefined);
  const launchButtonRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    messagesEndRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isMinimized]);

  useEffect(() => () => window.clearTimeout(replyTimerRef.current), []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        launchButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const generateBotResponse = (userMessage: string): BotResponse => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('product') || lowerMessage.includes('platform')) {
      return {
        text: 'We offer 3 enterprise software platforms: Fitness Management System (FMS), Omnichannel Commerce Platform, and Learning Management Platform (LMP). You can explore them on our Products page.',
        buttons: [{ label: 'Explore Products', action: '/products' }],
      };
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('consulting') || lowerMessage.includes('engineering')) {
      return {
        text: 'We provide comprehensive software engineering services including Digital Transformation, Strategic Consulting, On-Demand Workforce Solutions, and Business Process Management.',
        buttons: [{ label: 'Explore Services', action: '/services' }],
      };
    }
    if (lowerMessage.includes('quote') || lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('rfq')) {
      return {
        text: 'For pricing and tailored proposals, please use our Request for Quote form. Our solutions team will review your requirements and provide an estimate.',
        buttons: [{ label: 'Request a Quote', action: '/request-for-quote' }],
      };
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return {
        text: 'You can reach us at hello@azaroth-techhive.com or call +91 6379480931. You can also connect directly via our Connect page.',
        buttons: [{ label: 'Connect With Us', action: '/connect-with-us' }],
      };
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who')) {
      return {
        text: 'Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions, delivering end-to-end engineering excellence across Chennai and global enterprises.',
        buttons: [{ label: 'About Us', action: '/about' }],
      };
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        text: 'Hello! Welcome to Azaroth Tech-Hive. How can I assist you with your software engineering requirements today?',
      };
    }
    if (lowerMessage.includes('thank')) {
      return {
        text: 'You\'re very welcome! Let us know if you need any technical guidance or wish to schedule a consultation.',
      };
    }

    return {
      text: 'Thank you for your question. You can explore our software solutions, review our delivery framework, or connect with our engineering team directly.',
      buttons: [
        { label: 'Our Portfolio', action: '/portfolio' },
        { label: 'Connect With Us', action: '/connect-with-us' },
      ],
    };
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    window.clearTimeout(replyTimerRef.current);
    replyTimerRef.current = window.setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        buttons: botResponse.buttons,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleButtonClick = (action: string) => {
    navigate(action);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
      {/* Floating Chat Button (Brand Emerald & Imperial Gold per Client Docs) */}
      {!isOpen && (
        <button
          ref={launchButtonRef}
          onClick={() => setIsOpen(true)}
          aria-label="Open the Azaroth site guide"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #006C35 0%, #012411 100%)',
            color: '#FFFFFF',
            border: '2px solid #D4AF37',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0, 108, 53, 0.4)',
            transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1000,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 108, 53, 0.55), 0 0 15px rgba(212, 175, 55, 0.35)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #006C35 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 108, 53, 0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #006C35 0%, #012411 100%)';
          }}
        >
          <MessageSquare size={20} style={{ color: '#F8FAFC' }} aria-hidden="true" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="chat-assistant-title"
          aria-describedby="chat-assistant-note"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: isMinimized ? '300px' : '400px',
            maxWidth: 'calc(100vw - 4rem)',
            maxHeight: isMinimized ? 'auto' : '600px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 16px 48px rgba(1, 36, 17, 0.25), 0 0 1px rgba(0, 108, 53, 0.3)',
            border: '1px solid rgba(0, 108, 53, 0.25)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 180ms ease-out',
          }}
        >
          {/* Header in Dark Forest & Emerald with Imperial Gold */}
          <div
            style={{
              background: 'linear-gradient(135deg, #012411 0%, #006C35 100%)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(212, 175, 55, 0.35)',
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
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <div>
                <div id="chat-assistant-title" style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9375rem' }}>
                  Azaroth Site Guide
                </div>
                <div style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 600 }}>
                  Automated engineering assistant
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? 'Expand site guide' : 'Minimize site guide'}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
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
                {isMinimized ? <Maximize2 size={16} aria-hidden="true" /> : <Minimize2 size={16} aria-hidden="true" />}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  launchButtonRef.current?.focus();
                }}
                aria-label="Close site guide"
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
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
                <X size={16} aria-hidden="true" />
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
                  backgroundColor: '#F8FAFC',
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
                      <div
                        style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '8px',
                          backgroundColor: '#012411',
                          color: '#D4AF37',
                          border: '1px solid rgba(212, 175, 55, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        <Bot size={14} />
                      </div>
                    )}
                    <div
                      style={{
                        maxWidth: '75%',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        backgroundColor: message.sender === 'user' ? '#012411' : '#FFFFFF',
                        color: message.sender === 'user' ? '#FFFFFF' : '#1E293B',
                        border: message.sender === 'user' ? '1px solid #006C35' : '1px solid #E2E8F0',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      {message.text}
                      <div
                        style={{
                          fontSize: '0.6875rem',
                          marginTop: '0.25rem',
                          opacity: 0.65,
                          textAlign: message.sender === 'user' ? 'right' : 'left',
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
                                padding: '0.45rem 0.75rem',
                                borderRadius: '6px',
                                border: '1px solid #006C35',
                                backgroundColor: '#FFFFFF',
                                color: '#006C35',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 180ms ease-out',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#006C35';
                                e.currentTarget.style.color = '#FFFFFF';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = '#006C35';
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
                          backgroundColor: '#006C35',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <User size={14} style={{ color: '#FFFFFF' }} />
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
                        borderRadius: '8px',
                        backgroundColor: '#012411',
                        color: '#D4AF37',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Bot size={14} />
                    </div>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        gap: '0.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#006C35',
                          animation: 'bounce 1s infinite',
                        }}
                      />
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#006C35',
                          animation: 'bounce 1s infinite 0.2s',
                        }}
                      />
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#006C35',
                          animation: 'bounce 1s infinite 0.4s',
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
                  padding: '0.875rem 1rem',
                  borderTop: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    style={{
                      flex: 1,
                      padding: '0.625rem 0.875rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 180ms ease-out',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#006C35';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    aria-label="Send message"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: inputText.trim() ? '#006C35' : '#E2E8F0',
                      color: inputText.trim() ? '#FFFFFF' : '#94A3B8',
                      cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 180ms ease-out',
                    }}
                    onMouseEnter={(e) => {
                      if (inputText.trim()) e.currentTarget.style.backgroundColor = '#059669';
                    }}
                    onMouseLeave={(e) => {
                      if (inputText.trim()) e.currentTarget.style.backgroundColor = '#006C35';
                    }}
                  >
                    <Send size={15} />
                  </button>
                </div>
                <div
                  id="chat-assistant-note"
                  style={{
                    fontSize: '0.6875rem',
                    color: '#64748B',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                  }}
                >
                  Replies are automated guidance. For tailored RFQ proposals, use our quote form.
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
