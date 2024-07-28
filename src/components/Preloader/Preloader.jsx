import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import preloaderAnimation from "./Preloader.json";
import "./Preloader.css";

const Preloader = () => {
  const [fadeIn, setFadeIn] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('hide-overflow');

    const timeout = setTimeout(() => {
      setFadeIn(false);
      setTimeout(() => {
        setLoading(false);
        
        document.body.classList.remove('hide-overflow');
        
        AOS.init({
          duration: 1200,  
          once: true,
        });
        AOS.refresh(); 
      }, 300); 
    }, 2500);

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove('hide-overflow');
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeIn ? "fade-in" : "fade-out"}`}>
      <Lottie className="preloader-animation" animationData={preloaderAnimation} />
    </div>
  );
};

export default Preloader;
