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
  const [currentPage, setCurrentPage] = useState("home")

  const trackPage = (i) => {
    // console.log(i)
    setCurrentPage(i)
  }

  let mainContent
  switch(currentPage) {
    case "projects": mainContent = <Projects />
      break

    case "technologies": mainContent = <Technologies />
      break

    case "contacts": mainContent = <Contacts />
      break

    default: mainContent = <Header />
  }

  return (
    <div className="app">
      <NavBar handleClick={trackPage} />
        <main>
          {mainContent}
        </main>
      <Footer />
    </div>
  )
}

export default App
