import React from 'react'
import PokemonListElement from "./PokemonListElement";

export default function PokemonList({ pokemons } : { pokemons: any }) {
    return (
        <div className={"pokemon-list"}>
            {pokemons.map((p: any) => (
                <PokemonListElement pokemon={p}/>
            ))}
        </div>
    );
}