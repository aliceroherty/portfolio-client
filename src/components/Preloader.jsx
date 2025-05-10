import React, { useState, useEffect } from 'react';

// Simple preloader component that fades out when the page is loaded
const Preloader = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if document and all resources are loaded
    const handleLoad = () => {
      // Give extra time to ensure 3D resources load
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 1000); // Fade out animation duration
      }, 1000); // Extra loading time for 3D models
    };
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadComplete]);
  
  // Style for the preloader container
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background to match theme
    zIndex: 9999,
    opacity: loading ? 1 : 0,
    visibility: loading ? 'visible' : 'hidden',
    transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
  };
  
  // Style for the spinner
  const spinnerStyle = {
    border: '5px solid rgba(249, 168, 212, 0.1)',  // Light pink border
    borderTop: '5px solid #f9a8d4',  // Pink border-top
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  };
  
  // Style for the text
  const textStyle = {
    marginTop: '20px',
    color: '#f9a8d4',  // Pink text color
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };
  
  // Add keyframes for spinner animation directly in component
  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  return (
    <div style={preloaderStyle}>
      <style>{keyframesStyle}</style>
      <div style={spinnerStyle}></div>
      <div style={textStyle}>Loading...</div>
    </div>
  );
};

export default Preloader;
