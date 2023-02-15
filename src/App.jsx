import "./App.css"
import {useState} from "react"

// components
import NavBar from "./components/navbar/NavBar"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"

function App() {
  const [currentPage, setCurrentPage] = useState("#")

  return (
    <div className="app">
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
