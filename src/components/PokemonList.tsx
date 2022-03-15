import React from 'react'
import PokemonListElement from "./PokemonListElement";

export default function PokemonList({ pokemons } : { pokemons: any }) {
    return (
        <div className={"pokemon-list"}>
            {pokemons.map((p: any) => (
                p.map((po : any) =>
                    <PokemonListElement key={po} pokemon={po}/>
                )
            ))}
        </div>
    );
}