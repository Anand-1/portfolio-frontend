'use client';

import { useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Chat from './Chat';
import styles from './ChatPortal.module.css';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ChatPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const portalContent = (
    <div className={styles.portalContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className={styles.closeButton}
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
        className={styles.toggleButton}
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
