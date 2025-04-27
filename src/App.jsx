import { Routes, Route } from "react-router-dom"
import { Pokemon } from "./Pokemon"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { PokemonDetails } from "./pages/PokemonDetails"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/p" element={<Pokemon />} />
      <Route path="/details" element={<PokemonDetails />} />
    </Routes>
  )
}

export default App
