import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import ServicesSlider from './components/ServicesSlider';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';

function App() {
  return (
    <div >
   <Navbar/>
   <Hero/>
   <AboutUs/>
   <ServicesSlider/>
   <Footer/>
    </div>
  );
}

export default App;
