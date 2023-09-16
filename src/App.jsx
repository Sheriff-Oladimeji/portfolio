import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { Analytics } from "@vercel/analytics/react";


const App = () => {
  return (
    <div className="bg-darkBg relative flex flex-col justify-between font-inter text-white">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App