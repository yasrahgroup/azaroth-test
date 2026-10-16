import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minimize2, Maximize2, Bot, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import faviconImg from '../../assets/Favicon.png';
import { useCMS } from '../../context/CMSContext';

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
  const { settings } = useCMS();
  const chatbotConfig = settings?.chatbotConfig;
  const isEnabled = chatbotConfig?.isEnabled ?? true;

  const botDisplayName = chatbotConfig?.botName || 'Azaroth AI Guide';
  const botDisplayRole = chatbotConfig?.botRole || 'Automated engineering assistant';
  const defaultWelcome = chatbotConfig?.welcomeMessage || "Hello! I'm the automated Azaroth site guide. Ask me about our platforms, engineering services or how to reach the team.";
  const quickPromptsList = chatbotConfig?.quickPrompts && chatbotConfig.quickPrompts.length > 0
    ? chatbotConfig.quickPrompts
    : ['Our Platforms', 'Engineering Services', 'Request a Quote', 'Connect With Us'];
  const supportEmail = chatbotConfig?.supportEmail || settings?.supportEmail || 'hello@azaroth-techhive.com';
  const supportPhone = chatbotConfig?.supportPhone || settings?.phone || '+91 6379480931';
  const primaryColor = chatbotConfig?.primaryColor || 'var(--color-primary-button, #18181B)';
  const secondaryColor = chatbotConfig?.secondaryColor || 'var(--color-brand-gold, #F59E0B)';

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: defaultWelcome,
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

  // Sync welcome message if changed in settings
  useEffect(() => {
    if (chatbotConfig?.welcomeMessage) {
      setMessages((prev) => {
        if (prev.length === 1 && prev[0].id === '1') {
          return [{ ...prev[0], text: chatbotConfig.welcomeMessage }];
        }
        return prev;
      });
    }
  }, [chatbotConfig?.welcomeMessage]);

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
        text: `You can reach us directly at ${supportEmail} or call ${supportPhone}. You can also connect via our Connect page.`,
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
        text: `Hello! Welcome to Azaroth Tech-Hive. I'm ${botDisplayName}. How can I assist you with your software engineering requirements today?`,
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

  const handleSendMessage = (textToSend?: string) => {
    const messageContent = (textToSend !== undefined ? textToSend : inputText).trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageContent,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (textToSend === undefined) {
      setInputText('');
    }
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

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button (Theme Driven) */}
      {!isOpen && (
        <button
          ref={launchButtonRef}
          onClick={() => setIsOpen(true)}
          aria-label={`Open the ${botDisplayName}`}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            background: primaryColor,
            color: '#FFFFFF',
            border: `2px solid ${secondaryColor}`,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-primary-button, 0 6px 20px rgba(24, 24, 27, 0.4))',
            transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1000,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = `0 8px 25px rgba(24, 24, 27, 0.55), 0 0 15px ${secondaryColor}66`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-primary-button, 0 6px 20px rgba(24, 24, 27, 0.4))';
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
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.18), 0 0 1px rgba(24, 24, 27, 0.3)',
            border: `1px solid ${secondaryColor}44`,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 180ms ease-out',
          }}
        >
          {/* Header in Assistant Theme Colors */}
          <div
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #09090B 100%)`,
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: `2px solid ${secondaryColor}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={faviconImg}
                alt={botDisplayName}
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
                  {botDisplayName}
                </div>
                <div style={{ color: secondaryColor, fontSize: '0.75rem', fontWeight: 600 }}>
                  {botDisplayRole}
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
                          backgroundColor: primaryColor,
                          color: secondaryColor,
                          border: `1px solid ${secondaryColor}44`,
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
                        backgroundColor: message.sender === 'user' ? primaryColor : '#FFFFFF',
                        color: message.sender === 'user' ? '#FFFFFF' : '#1E293B',
                        border: message.sender === 'user' ? '1px solid rgba(0,0,0,0.1)' : '1px solid #E2E8F0',
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
                                border: `1px solid ${primaryColor}`,
                                backgroundColor: '#FFFFFF',
                                color: primaryColor,
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 180ms ease-out',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = primaryColor;
                                e.currentTarget.style.color = '#FFFFFF';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFFFFF';
                                e.currentTarget.style.color = primaryColor;
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
                          backgroundColor: 'var(--color-primary-button, #18181B)',
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
                        backgroundColor: 'var(--color-primary-button, #18181B)',
                        color: 'var(--color-brand-gold, #F59E0B)',
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
                          backgroundColor: primaryColor,
                          animation: 'bounce 1s infinite',
                        }}
                      />
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: primaryColor,
                          animation: 'bounce 1s infinite 0.2s',
                        }}
                      />
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: primaryColor,
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
                {/* Quick Prompt Chips */}
                {quickPromptsList && quickPromptsList.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.625rem' }}>
                    {quickPromptsList.map((prompt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(prompt)}
                        style={{
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          backgroundColor: '#F1F5F9',
                          color: '#1E293B',
                          border: '1px solid #E2E8F0',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = primaryColor;
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F1F5F9';
                          e.currentTarget.style.color = '#1E293B';
                        }}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

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
                      e.currentTarget.style.borderColor = primaryColor;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputText.trim()}
                    aria-label="Send message"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: inputText.trim() ? primaryColor : '#E2E8F0',
                      color: inputText.trim() ? '#FFFFFF' : '#94A3B8',
                      cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: inputText.trim() ? `0 2px 8px ${primaryColor}40` : 'none',
                      transition: 'all 180ms ease-out',
                    }}
                    onMouseEnter={(e) => {
                      if (inputText.trim()) e.currentTarget.style.filter = 'brightness(1.15)';
                    }}
                    onMouseLeave={(e) => {
                      if (inputText.trim()) e.currentTarget.style.filter = 'none';
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
