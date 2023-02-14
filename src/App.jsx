import "./App.css"

// components
import Header from "./components/header/Header"
import TechStacks from "./components/tech-stacks/TechStacks"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="app">
      <Header />
      <TechStacks />
      <Footer />
    </div>
  )
}

export default App
