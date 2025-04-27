import axios from "axios"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const getAllPokemons = (limit = 20, offset = 0) => {
    return api.get(`pokemon?offset=${offset}&limit=${limit}`)
}

export const getPokemonsByType = (id = 1) => {
    return api.get(`/type/${id}`)
}

export const getPokemonTypes = () => {
    return api.get('/type')
}

export const getPokemonByIdOrName = (id = 1) => {
    return api.get(`/pokemon/${id}`)
}

export const getPokemonEvolution = (id = 1) => {
    return api.get(`evolution-chain/${id}`)
}