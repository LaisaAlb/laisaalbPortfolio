import './App.css'
import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'

function App() {
  return (
    <div className="min-h-screen bg-[#191919] flex flex-col">
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App
