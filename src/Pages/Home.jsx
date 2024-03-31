
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/hero';
import Features from '../components/Features';
import About from '../components/About'
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
        <Navbar/> 
        <HeroSection />
        <About/>
        <Features /> 
        <Footer />
    </>
  )
}

export default Home;
