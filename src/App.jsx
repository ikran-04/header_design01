import Navbar from "./components/Navbar"
import Hero from './components/Hero'
function App() {

  return (
    <div className="w-11/12  h-full m-auto relative">
    <Navbar/>
      <Hero/>
      <div className="w-full h-full ">
        
       <button className="flex items-end absolute bottom-5 left-5"><img src="/mouse.png" alt=""  className="w-8 h-8"/>Scroll Down</button>
      </div>

    </div>
  )
}

export default App
