
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{useEffect} from "react";
import Home from "./Pages/Home";
import ContactPage from './Pages/Contact'
import ReviewPage from './Pages/Review'
import ChatComponent from './components/Forum';
import ReadingArea from './Pages/ReadingArea';
import Games from './Pages/Games';
import Privacy from './Pages/Privacy';
// import Features from './components/Features'
//AOs animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100
    });
  }, []);
  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/review" element={<ReviewPage />} />
    <Route path="/forum" element={<ChatComponent />} />
    <Route path='/readingarea' element={<ReadingArea/>} />
    <Route path='/games' element={<Games/>} />
    <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
    </Router>
  
    {/* <Features/> */}
    </>
  )
}

export default App
