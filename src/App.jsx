
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
// import Features from './components/Features'

function App() {


  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  
    {/* <Features/> */}
    </>
  )
}

export default App
