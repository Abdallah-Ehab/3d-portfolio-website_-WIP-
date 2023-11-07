import { BrowserRouter } from "react-router-dom"
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact} from "./components"




const App= ()=> {
  return (
    <BrowserRouter>
    <div className="relative w-full z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-norepeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
    </div>
    </BrowserRouter>
    )
}

export default App
