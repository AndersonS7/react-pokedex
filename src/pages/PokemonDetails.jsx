import { useLocation, Navigate } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Stats } from "../components/stats/Stats"
import { useEffect, useState } from "react"
import { getPokemonSpriteByName, getPokemonSpecies, getPokemonEvolution } from "../services/pokemonService"
import spriteDefault from "../assets/pokebola.png"

export function PokemonDetails() {
    const [urlSprite, setUrlSprite] = useState("")
    const [dataPokemon, setDataPokemon] = useState({})

    const location = useLocation()
    const details = location.state?.details

    if (!details) {
        return <Navigate to="/" replace />
    }

    useEffect(() => {
        setUrlSprite(getPokemonSpriteByName(details.name))
    }, [])

    useEffect(() => {

        Promise.all([getPokemonSpecies(7), getPokemonEvolution(details.id)]).then(([pokeSpecie, pokeEvo]) => {
            const about = pokeSpecie.data.flavor_text_entries[5].flavor_text
            const data = pokeEvo.data

            const dataPoke = {
                "id": data.id,
                "name": data.chain.species.name,
                "about": about,
                "secondaryEvo": data.chain.evolves_to[0].species.name,
                "endEvo": data.chain.evolves_to[0].evolves_to[0].species.name,
            }

            setDataPokemon(dataPoke)
        })

    }, [])

    return (
        <div>
            <Header />
            <section className="flex justify-center items-center mt-8">
                <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 md:w-3/5 sm:w-full  p-4 bg-gray-100 rounded-md">
                    <div className="bg-white rounded-md p-4">
                        <div className="flex justify-between">
                            <div className="flex justify-start flex-col w-2/5">
                                <h2 className="font-bold uppercase text-2xl">{details.name}</h2>
                                <ul className="flex gap-2 mt-2 w-full">
                                    {details.type != null ? details.type.map(item => (
                                        <li className={`${item} flex justify-center items-center w-full rounded-xl font-light capitalize`} key={item}>{item}</li>
                                    )) : null}
                                </ul>
                            </div>
                            <span className="uppercase text-2xl font-light text-gray-400">#{details.cod}</span>
                        </div>
                        <div className="flex flex-col justify-center gap-2 mt-4">
                            <span className="text-gray-400">Altura: {details.height / 10} m</span>
                            <span className="text-gray-400">Peso: {details.weight / 10} kg</span>
                        </div>

                        <div className="flex justify-between flex-col gap-2 mt-4 uppercase">
                            <hr className="text-gray-100 mb-2" />
                            <Stats name="hp" value={details.hp} title="saúde" />
                            <Stats name="spd" value={details.speed} title="velocidade" />
                            <Stats name="atk" value={details.attack} title="ataque" />
                            <Stats name="def" value={details.defense} title="defesa" />
                            <Stats name="atks" value={details.specialAttack} title="ataque especial" />
                            <Stats name="defs" value={details.specialDefense} title="defesa especial" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-white rounded-md">
                        <img className="h-64 w-auto pl-4" src={urlSprite ? urlSprite : spriteDefault} />
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center mt-8">
                <div className="md:grid md:grid-cols-1 md:gap-4 md:w-3/5 sm:w-full p-4 bg-gray-100 rounded-md">
                    <div className="flex justify-between sm:flex-col sm:items-center gap-4 p-4 rounded-md bg-white">
                        <h2>Evolução</h2>
                        <div className="flex md:justify-between md:flex-row sm:flex-col sm:justify-center gap-4 p-4">
                            <div className="flex justify-center items-center rounded-full w-32 h-32 bg-green-200">
                                <span>{dataPokemon != undefined && dataPokemon.name}</span>
                            </div>
                            <div className="flex justify-center items-center rounded-full w-32 h-32 bg-green-200">
                                <span>{dataPokemon != undefined && dataPokemon.secondaryEvo}</span>
                            </div>
                            <div className="flex justify-center items-center rounded-full w-32 h-32 bg-green-200">
                                <span>{dataPokemon != undefined && dataPokemon.endEvo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}