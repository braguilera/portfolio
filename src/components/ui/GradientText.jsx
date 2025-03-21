// components/UI/GradientText.jsx
import React from 'react';

const GradientText = ({ children, className = '', darkMode = false }) => {
  return (
    <span
      className={`inline-block font-oswald ${className} ${
        darkMode ? 
        'dark:[text-shadow:1px_1px_7.5px_rgba(30,30,30,0.9)]' : 
        '[text-shadow:1px_1px_7.5px_rgba(241,241,241,0.9)]'
      }`}
      style={{
        fontSize: 'clamp(2rem, 4vw + 2rem, 12rem)',
        letterSpacing: '4px',
        backgroundImage: darkMode ? 
          'linear-gradient(45deg, #d4d4d8, #a1a1aa)' : 
          'linear-gradient(45deg, #6a6a6b, #a9a39b)',
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;