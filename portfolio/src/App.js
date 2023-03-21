import About from "./components/About";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Cursus from "./components/Cursus";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

function App() {
  return (
    <><Navbar />
    <Hero/>
    <About/>
    <Cursus/>
    <Competences/>
    <Projets/>
    <Contact/>
   <Footer/>
    </>
  );
}

export default App;
