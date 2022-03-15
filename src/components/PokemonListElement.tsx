import React, {useEffect, useState} from 'react'
import axios, {AxiosError, AxiosResponse} from "axios";
import LoadingDots from "./LoadingDots";

export default function PokemonListElement({ pokemon } : { pokemon: any }) {
    const [error, updateError] = useState(false);
    const [pokemonDetails, updatePokemonDetails] = useState<any>();
    const link = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    const [loading, updateLoading] = useState(true);

    useEffect(() => {
        updateError(false);
        const controller = new AbortController();
        axios.get(link, {
            signal: controller.signal
        }).then((res : AxiosResponse) => {
            updatePokemonDetails(res.data);
            updateLoading(false);
        }).catch((error : AxiosError) => {
            if (axios.isCancel(error)) {
                updateError(true);
            }
        });
        return () => controller.abort();
    }, [link]);
    return (
        <>
            <div className={"pokemon-list-element"}>
                {loading && <LoadingDots />}
                {!loading && <img src={pokemonDetails ? pokemonDetails.sprites.front_default : " "} />}
                {!loading && <span className={"pokemon-name"}> {pokemon.name.toUpperCase()}</span>}
                {!loading && <span >{pokemonDetails.types[0].type.name.toString().charAt(0).toUpperCase()
                + pokemonDetails.types[0].type.name.toString().slice(1)}</span>}
            </div>
            <div>{error && 'Error...'}</div>
        </>
    );
}