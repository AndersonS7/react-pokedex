import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="flex justify-center items-center w-full h-14 bg-red-300">
            <nav className="flex justify-center items-center h-full">
                <Link className="flex justify-center h-full px-8 items-center hover:bg-red-400 hover:text-white" to="/">Pokedex</Link>
                <Link className="flex justify-center h-full px-8 items-center hover:bg-red-400 hover:text-white" to="/about">Sobre</Link>
            </nav>
        </header>
    )
}