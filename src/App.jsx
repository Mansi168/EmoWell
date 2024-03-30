
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ContactPage from './Pages/Contact'
import ChatComponent from './components/Forum';
import ReadingArea from './Pages/ReadingArea';
// import Features from './components/Features'

function App() {


  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/forum" element={<ChatComponent />} />
    <Route path='/readingarea' element={<ReadingArea/>} />
    </Routes>
    </Router>
  
    {/* <Features/> */}
    </>
  )
}

export default App
