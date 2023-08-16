import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"


const App = () => {
  return (
    <div className='bg-darkBg relative font-inter text-white'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App