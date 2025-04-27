import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllPokemons, getPokemonTypes, getPokemonsByType } from "./services/pokemonService"

export function Pokemon() {
    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [byType, SetByType] = useState([])
    const [evolution, setEvolution] = useState([])

    useEffect(() => {
        getAllPokemons(5, 0).then(resp => {
            const names = resp.data.results.map(item => {
                return item.name
            })

            setPokemons(names)
        })

        getPokemonTypes().then(resp => {
            setTypes(resp.data.results)
        })

        getPokemonsByType(12).then(resp => {
            const names = resp.data.pokemon.map(item => {
                return item.pokemon.name
            })
            SetByType(names)
        })

    }, [])

    const handleClick = () => {
        const item = 2
        navigate("/details", { state: { item } })
    }

    return (
        <div>

        </div>
    )
}