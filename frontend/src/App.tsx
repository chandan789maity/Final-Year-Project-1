
import './App.css'
import { FloatingNavbar } from './components/AcertinityUI/Floating-Dock/FloatingNavbar'
import { CardHoverEffectDemo } from './components/AcertinityUI/Three-D-Card/CardHoverEffectDemo'
import { AnimatedTooltipPreview } from './components/AcertinityUI/ToolaTip/Contributors'
import { NavbarDemo } from './components/AcertinityUI/TopNavbar/NavbarDemo'
import Footer from './components/Footer/Footer'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className='bg-gray-950'>
      <NavbarDemo/>
      <Navbar/>
      <Hero/>
      <CardHoverEffectDemo/>
      <AnimatedTooltipPreview/>
      <FloatingNavbar/>
      <Footer/>
      </div>
    </>
  )
}

export default App
