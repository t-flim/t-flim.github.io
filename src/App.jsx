import "./App.css"

// components
import NavBar from "./components/navbar/NavBar"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import TechStacks from "./components/tech-stacks/TechStacks"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="app">
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
