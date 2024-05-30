
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/hero';
import Features from '../components/Features';
import About from '../components/About'
import Footer from '../components/Footer/Footer';
import FloatBtn from '../components/FloatBtn/FloatBtn';

const Home = () => {
  return (
    <>
        <Navbar/> 
        <HeroSection />
        <About/>
        <Features /> 
        <Footer />
        <FloatBtn />
    </>
  )
}

export default Home;
