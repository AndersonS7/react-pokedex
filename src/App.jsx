import { Routes, Route } from "react-router-dom"
import { Pokemon } from "./Pokemon"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { PokemonDetails } from "./pages/PokemonDetails"
import { Teste } from "./pages/Testes"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/p" element={<Pokemon />} />
      <Route path="/details" element={<PokemonDetails />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  )
}

export default App
