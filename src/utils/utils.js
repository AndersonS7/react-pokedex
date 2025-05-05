import { getPokemonEvolution, getPokemonByIdOrName } from "../services/pokemonService"

export const getEvolutionData = () => {
    const limit = 550
    const outside = [210, 222, 225, 226, 227, 231, 238, 251] // id que gera 404
    let pokemonsEvo = []

    for (let count = 1; count < limit; count++) {

        if (!outside.includes(count)) {
            getPokemonEvolution(count).then(resp => {
                const data = resp.data
                const evos = data.chain.evolves_to


                let allEvos = [];

                evos.map(item => {
                    allEvos.push(item.species.name)

                    if (item.evolves_to.length <= 0)
                        return null

                    allEvos.push(item.evolves_to[0].species.name)
                })

                pokemonsEvo.push({
                    "idEvo": data.id,
                    "name": data.chain.species.name,
                    "evos": allEvos
                })
            })
        }
    }

    return pokemonsEvo
}

export const getAllPokemonsData = async () => {
    const limit = 1026;
    let pokemons = []
    let allTypes = []

    for (let count = 1; count < limit; count++) {
        await getPokemonByIdOrName(count).then(resp => {
            const data = resp.data

            const types = data.types.map(item => {
                if (!allTypes.includes(item.type.name)) {
                    allTypes.push(item.type.name)
                }

                return item.type.name
            })

            const name = data.name
            const cod = data.id.toString().padStart(3, "0")
            const hp = data.stats[0].base_stat
            const attack = data.stats[1].base_stat
            const defense = data.stats[2].base_stat
            const specialAttack = data.stats[3].base_stat
            const specialDefense = data.stats[4].base_stat
            const speed = data.stats[5].base_stat
            const height = data.height
            const weight = data.weight
            const type = types

            pokemons.push(
                {
                    "name": name,
                    "cod": cod,
                    "stats": {
                        "hp": hp,
                        "weight": weight,
                        "height": height,
                        "attack": attack,
                        "defense": defense,
                        "specialAttack": specialAttack,
                        "specialDefense": specialDefense,
                        "speed": speed
                    },
                    "type": type
                })
        })
    }

    return {
        "pokemons": pokemons,
        "allTypes": allTypes
    }
}

export const filterPokemonByType = async (selectedType) => {
    const { pokemons } = await getAllPokemonsData()

    return pokemons
        .filter(pokemon => pokemon.type.includes(selectedType))
        .map(pokemon => pokemon.name);
};