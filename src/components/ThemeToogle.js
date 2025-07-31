"use client"

import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      <div 
        onClick={toggleTheme}
        style={{
          width: '60px',
          height: '30px',
          borderRadius: '15px',
          backgroundColor: isDarkMode ? '#4a4a4a' : '#e0e0e0',
          border: `2px solid ${isDarkMode ? '#666666' : '#cccccc'}`,
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? '#000' : '#fff',
          position: 'absolute',
          top: '3px',
          left: isDarkMode ? '33px' : '3px',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </div>
  );
}