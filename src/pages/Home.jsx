import { useEffect, useState } from "react"
import { Header } from "../components/header/Header";
import { getAllPokemons, getPokemonsByType, getPokemonTypes } from "../services/pokemonService"
import { MiniCard } from "../components/cards/MiniCard";

export function Home() {
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        getAllPokemons(100, 0).then(resp => {
            const names = resp.data.results.map(item => {
                return item.name
            })

            setPokemons(names)
        })

        getPokemonTypes().then(resp => {
            const typesName = resp.data.results.map((item, index) => {
                if (item.name == "stellar" || item.name == "unknown") {
                    return {
                        "id": null,
                        "name": null
                    }
                } else {
                    return {
                        "id": index + 1,
                        "name": item.name
                    }
                }
            })
            setTypes(typesName)
        })

    }, [])

    useEffect(() => {
        if (selectedPokemon.id != 0) {
            getPokemonsByType(selectedPokemon.id).then(resp => {
                const data = resp.data
                const names = data.pokemon.map(pokemon => {
                    return pokemon.pokemon.name
                })
                setPokemons(names)
            })
        }

    }, [selectedPokemon])

    const handleSelected = (type) => {
        setSelectedPokemon(type)
    }

    const handleDeleteType = () => {
        setSelectedPokemon({
            "id": 0,
            "name": null
        })
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <Header />
            <div className="md:w-4/6 sm:w-full" >
                <section className="flex justify-center items-center flex-col mt-8 p-4">
                    <div>
                        <ul className="grid md:grid-cols-8 sm:grid-cols-4 gap-4">
                            {types.map(item => {
                                if (item.name != null) {
                                    return <li onClick={() => handleSelected(item)} className={`${item.name} flex justify-center items-center w-24 rounded-xl font-light capitalize cursor-pointer`} key={item.name}>{item.name}</li>
                                }
                            })}
                        </ul>
                    </div>

                    {/* {selectedPokemon.id > 0 && <div className="flex justify-between w-full mt-4">
                        <div className="flex gap-4 w-5/6 pl-4 py-2 mt-4 bg-gray-100 rounded-lg">
                            <span>Pokémons do Tipo</span> <span className={`${selectedPokemon.name} flex justify-center items-center w-30 rounded-xl font-light capitalize`}>{selectedPokemon.name}</span>
                        </div>
                        <button onClick={handleDeleteType} className="flex justify-center w-1/6 p-2 mt-4 text-white bg-red-300 rounded-r-lg hover:border-r-red-400 hover:font-bold">X</button>
                    </div>} */}

                </section >
                <section className="flex justify-center items-center flex-col mt-4 p-4">
                    <div className="flex justify-between items-center flex-wrap">
                        <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                            {pokemons.map(pokemonName => (
                                <li key={pokemonName}>
                                    <MiniCard pokemon={pokemonName} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div >
    )
}