import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPokemonByIdOrName } from "../../services/pokemonService"

export function MiniCard({ pokemon }) {
    const [details, setDetails] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getPokemonByIdOrName(pokemon).then(resp => {
            const data = resp.data

            const types = data.types.map(item => {
                return item.type.name
            })

            const details = {
                "id": data.id,
                "cod": data.id.toString().padStart(4, "0"),
                "name": data.name,
                "hp": data.stats[0].base_stat,
                "attack": data.stats[1].base_stat,
                "defense": data.stats[2].base_stat,
                "specialAttack": data.stats[3].base_stat,
                "specialDefense": data.stats[4].base_stat,
                "speed": data.stats[5].base_stat,
                "height": data.height,
                "weight": data.weight,
                "type": types,
                "sprite": data.sprites.front_default
            }

            setDetails(details)
        })
    }, [])

    const handleClick = () => {
        navigate("/details", { state: { details } })
    }

    return (
        <div onClick={handleClick}
            className="flex justify-between items-center gap-8 cursor-pointer w-full h-32 p-4 rounded-lg bg-linear-to-l from-gray-200 from-50% to-gray-100 to-50% hover:from-100%">

            <div className="w-1/2">
                <h2 className="font-bold uppercase">{details.name}</h2>
                <span className="font-light uppercase text-gray-400">#{details.cod}</span>
                <ul className="flex flex-col gap-2 w-full">
                    {details.type != null ? details.type.map(item => (
                        <li className={`${item} flex justify-center items-center rounded-xl font-light capitalize`} key={item}>{item}</li>
                    )) : null}
                </ul>
            </div>
            <img className="w-1/2" src={details.sprite} />
        </div>
    )
}