import Navbar from "./components/Navbar"
import Hero from './components/Hero'
function App() {

  return (
    <div className="w-4/5 h-screen m-auto ">
    <Navbar/>
      <Hero/>
      <div>
        
       <button className="flex items-end"><img src="/mouse.png" alt=""  className="w-8 h-8"/>Scroll Down</button>
      </div>

    </div>
  )
}

export default App
