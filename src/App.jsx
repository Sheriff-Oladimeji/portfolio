import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="bg-darkBg relative flex flex-col justify-between font-inter text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
