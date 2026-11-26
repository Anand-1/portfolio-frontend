'use client';

import { useState, useSyncExternalStore } from 'react';
import styles from './UsernamePopup.module.css';

const usernameUpdatedEvent = 'username-updated';

const subscribeToUsername = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener(usernameUpdatedEvent, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(usernameUpdatedEvent, callback);
  };
};

const getUsernameSnapshot = () => localStorage.getItem('app_username');
const getServerUsernameSnapshot = () => null;

export default function UsernamePopup() {
  const username = useSyncExternalStore(
    subscribeToUsername,
    getUsernameSnapshot,
    getServerUsernameSnapshot
  );
  const [inputVal, setInputVal] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);
  const isOpen = !username && !isDismissed;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputVal }),
      });

      if (!response.ok) {
        throw new Error('Failed to save username to server');
      }

      localStorage.setItem('app_username', inputVal);
      window.dispatchEvent(new Event(usernameUpdatedEvent));
    } catch (error) {
      console.error('API Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsDismissed(true);
  };

  if (!isOpen) {
    return (
      <div className={styles.welcome}>
        {username ? (
          <h1 className={styles.welcomeTitle}>Welcome back, {username}!</h1>
        ) : (
          <h1 className={styles.welcomeTitle}>Welcome, Guest!</h1>
        )}
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <button
          onClick={handleClose}
          type="button"
          className={styles.closeButton}
          aria-label="Close"
          disabled={isLoading}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className={styles.title}>Set Username</h2>
        <p className={styles.description}>
          Choose a name to personalize your experience.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter username..."
              maxLength={20}
              disabled={isLoading}
              className={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? (
              <>
                <svg className={styles.spinner} fill="none" viewBox="0 0 24 24">
                  <circle className={styles.spinnerTrack} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className={styles.spinnerHead} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </>
            ) : (
              'Save & Continue'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
