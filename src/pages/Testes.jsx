import { useEffect, useState } from "react"
import { getAllPokemons, getPokemonByIdOrName, getPokemonEvolution, getPokemonSpecies, getPokemonTypes } from "../services/pokemonService"
import { getEvolutionData, getAllPokemonsData, filterPokemonByType } from "../utils/utils"

export function Teste() {
    const [pokemon, setPokemon] = useState()
    const [dataPokemon, setDataPokemon] = useState({})
    const allPokemons = []

    useEffect(() => {
        //busca o pokemon pelo nome
        // getPokemonByIdOrName(133).then(resp => {
        //     const data = resp.data
        //     console.log(data)
        // })

        // busca a evolução do pokemon pelo id
        // console.log(getEvolutionData())

        // filtra todos os pokemons de determinado tipo
        // ** a função já está filtrando os pokemons de acordo com o tipo informado
        // filterPokemonByType('water').then(resp => {
        //     console.log(resp)
        // })

    }, [])

    return (
        <>
            <h1>Teste</h1>
        </>
    )
}