import { Header } from "../components/header/Header"
import pokemonsCover from "../assets/pokemons.jpg"

export function About() {
    return (
        <div >
            <Header />
            <section className="flex items-center gap-4 flex-col w-full">
                <div className="flex justify-center items-center gap-4 mt-4 w-[50%] flex-col">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl">Breve Resumo</h2>
                        <p className="mt-4">
                            Pokémon é uma franquia de mídia japonesa lançada em 1996, que engloba videogames,
                            animações, filmes, cards colecionáveis e diversos produtos, tendo se tornado um fenômeno global
                            graças à sua mecânica de captura e treinamento de criaturas conhecidas como “Pokémon”
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl mt-4">O que é Pokémon?</h2>
                        <p className="mt-4">
                            Pokémon (contração de “Pocket Monsters”) descreve tanto as criaturas quanto o universo ficcional em que humanos
                            convivem e batalham com esses seres dotados de poderes especiais. A ideia original foi de Satoshi Tajiri,
                            e o desenvolvimento dos jogos principais ficou a cargo da Game Freak em parceria com a Nintendo e a Creatures
                            <br />
                            Ao todo, existem mais de mil espécies de Pokémon, inspiradas em animais, plantas e mitologia, cada uma com habilidades e atributos únicos
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl mt-4">Filmes</h2>
                        <p className="mt-4">
                            Desde 1998, foram lançados 23 filmes cinematográficos de Pokémon. Quase todos são canônicos à série de TV, iniciando
                            com Pokémon: O Filme (1998 – “Mewtwo Strikes Back”) e passando por títulos como Detetive Pikachu (2019) e Segredos da Selva (2020).
                            Esses longas exploram tanto histórias ligadas aos protagonistas do anime quanto tramas independentes centradas em criaturas
                            lendárias e eventos especiais
                        </p>
                        <br />
                    </div>

                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl mt-4">Jogos</h2>
                        <p className="mt-4">
                            A franquia começou com Pokémon Red e Pokémon Green,
                            lançados em 27 de fevereiro de 1996 para Game Boy, introduzindo a mecânica de capturar, treinar e batalhar com
                            criaturas em RPGs de turnos. Desde então, a série principal evoluiu por gerações (adicionando novas regiões, Pokémon e funcionalidades),
                            enquanto diversos spin-offs (como Mystery Dungeon, Ranger e Detective Pikachu) expandiram o universo para diferentes gêneros e plataformas
                        </p>
                    </div>
                    <a href="https://pt.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" className="flex justify-center items-center cursor-pointer p-4 h-8 w-full mb-4 rounded-md bg-sky-300 hover:bg-sky-600 hover:text-white hover:font-bold">Saiba mais</a>
                </div>
            </section>
        </div>
    )
}