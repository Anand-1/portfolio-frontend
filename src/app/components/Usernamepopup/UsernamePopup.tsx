'use client';

import { useState, useEffect } from 'react';

export default function UsernamePopup() {
  const [username, setUsername] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // New state to handle loading UI
  useEffect(() => {
    const savedUser = localStorage.getItem('app_username');
    if (savedUser) {
      setUsername(savedUser);
    } else {
      setIsOpen(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    setIsLoading(true);

    try {
      // Make the POST API call to the specified endpoint
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputVal }),
      });

      if (!response.ok) {
        throw new Error('Failed to save username to server');
      }

      // If server responds successfully, update local storage and state
      localStorage.setItem('app_username', inputVal);
      setUsername(inputVal);
      setIsOpen(false);
    } catch (error) {
      console.error('API Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="p-8 text-center text-gray-800 dark:text-gray-200">
        {username ? (
          <h1 className="text-2xl font-bold">Welcome back, {username}!</h1>
        ) : (
          <h1 className="text-2xl font-bold">Welcome, Guest!</h1>
        )}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-15 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-2xl max-w-sm w-full relative transform scale-100 transition-transform duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Close"
          disabled={isLoading}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pr-6">
          Set Username
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Choose a name to personalize your experience.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter username..."
              maxLength={20}
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
