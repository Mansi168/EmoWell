import React, { useEffect, useState } from 'react';
import './Progress.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}`;
    setScrollProgress(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className="progress-container" style={{position:"fixed"}}>
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%`,position:"fixed" }}
      >
        
      </div>
    </div>
  );
};

export default ProgressBar;
