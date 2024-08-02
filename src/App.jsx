import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Products from "./Components/Products"
import Collections from "./Components/Collections"
import About from "./Components/About"
import Contact from "./Components/Contact"



export default function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Collections/>
      <About/>
      <Contact/>
      
    </div>
  )
}
