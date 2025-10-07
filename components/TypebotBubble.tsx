'use client';

import { useState, useEffect, CSSProperties } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TypebotBubble() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPreview(true);
      }
    }, 5000); // autoShowDelay from original component

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleBubbleClick = () => {
    setIsOpen(!isOpen);
    setShowPreview(false); // Hide preview when bubble is clicked
  };

  // Styles
  const bubbleStyle: CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#598E71',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  };

  const iframeContainerStyle: CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '400px',
    height: '600px',
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 5px 40px rgba(0,0,0,.16)',
    zIndex: 1000,
    overflow: 'hidden',
  };

  const iframeStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    border: '0',
  };

  const previewMessageStyle: CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    backgroundColor: 'white',
    padding: '10px 15px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    zIndex: 1000,
    maxWidth: '250px',
  };

  const iconContainerStyle: CSSProperties = {
      color: 'white',
  }

  const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <>
      {isOpen && (
        <div style={iframeContainerStyle}>
          <iframe
            src="/api/chat/conversation"
            style={iframeStyle}
            title="Chatbot"
          ></iframe>
        </div>
      )}
      {showPreview && !isOpen && (
        <div style={previewMessageStyle}>
          {t('chatBubble.message')}
        </div>
      )}
      <div style={bubbleStyle} onClick={handleBubbleClick}>
        <div style={iconContainerStyle}>
            {isOpen ? <CloseIcon /> : <ChatIcon />}
        </div>
      </div>
    </>
  );
}
