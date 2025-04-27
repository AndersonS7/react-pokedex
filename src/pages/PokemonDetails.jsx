import { useLocation, Navigate } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Stats } from "../components/stats/Stats"
import { useEffect, useState } from "react"
import { getPokemonEvolution } from "../services/pokemonService"

export function PokemonDetails() {
    const [evolution, setEvolution] = useState({})

    const location = useLocation()
    const details = location.state?.details

    if (!details) {
        return <Navigate to="/" replace />
    }

    useEffect(() => {
        getPokemonEvolution(details.id).then(resp => {
            const data = resp.data
            console.log(data)
            console.log(details.id)

            const evo = {
                "id": data.id,
                "current": data.chain.species.name,
                "next": data.chain.evolves_to[0].species.name,
                "next_url": data.chain.evolves_to[0].species.url,
                "last": data.chain.evolves_to[0].evolves_to[0].species.name,
                "last_url": data.chain.evolves_to[0].evolves_to[0].species.url
            }

            setEvolution(evo)
        })
    }, [])

    return (
        <div>
            <Header />
            <section className="flex justify-center items-center mt-8">
                <div className="grid grid-cols-2 gap-4 w-4/5 p-4 bg-gray-100 rounded-md">
                    <div className="bg-white rounded-md p-2">
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
                        <img className="w-1/2" src={details.sprite} />
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center mt-4">
                <div className="flex flex-col gap-4 w-4/5 p-4 bg-gray-100 rounded-md">
                    <strong>Evoluções</strong>
                    <ul>
                        <li>{evolution.current}</li>
                        <li>{evolution.next}</li>
                        <li>{evolution.last}</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}