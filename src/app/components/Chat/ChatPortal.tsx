'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Chat from './Chat';

export default function ChatPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const portalContent = (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    >
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '0',
            width: '380px',
            height: '500px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 5px 40px rgba(0, 0, 0, 0.16)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px 8px',
              zIndex: 10,
            }}
          >
            ✕
          </button>
          <Chat />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
        title={isOpen ? 'Close chat' : 'Open chat'}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          fontSize: '28px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto',
          outline: 'none',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          padding: 0,
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );

  if (!mounted) {
    return null;
  }

  return createPortal(portalContent, document.body);
}
