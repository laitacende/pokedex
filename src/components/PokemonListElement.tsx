import React from 'react'

export default function PokemonListElement({ pokemon } : { pokemon: any }) {
    return (
        <div className={"pokemon-list-element"}>
            {pokemon.name}
        </div>
    );
}