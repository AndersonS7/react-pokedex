import { useEffect, useState } from "react"
import { Header } from "../components/header/Header";
import { getAllPokemons, getPokemonTypes } from "../services/pokemonService"
import { MiniCard } from "../components/cards/MiniCard";

export function Home() {
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        getAllPokemons(15, 0).then(resp => {
            const names = resp.data.results.map(item => {
                return item.name
            })

            setPokemons(names)
        })

        getPokemonTypes().then(resp => {
            const typesName = resp.data.results.map(item => {
                return item.name
            })
            setTypes(typesName)
        })

    }, [])

    return (
        <div className="flex justify-center items-center flex-col">
            <Header />
            <div className="md:w-5/6 sm:w-full" >
                <section className="flex justify-center items-center mt-8 p-4">
                    <div>
                        <ul className="grid md:grid-cols-8 sm:grid-cols-4 gap-4">
                            {types.map(item => (
                                <li className={`${item} flex justify-center items-center w-24 rounded-xl font-light capitalize cursor-pointer`} key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section >
                <section className="flex justify-center items-center flex-col mt-8 p-4">
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
            <footer>
                pokemon 2025
            </footer>
        </div >
    )
}