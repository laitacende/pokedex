import React, { useState, useEffect } from 'react';
import './App.css';
import axios, {AxiosResponse, Canceler} from 'axios';
import PokemonList from "./components/PokemonList";
import GetMoreButton from "./components/GetMoreButton";

let number: number = 20;

function App() {
    const [pokemonData, updatePokemon] = useState([]);
    const [currentPageUrl, updateCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    const [loading, updateLoading] = useState(true);
    useEffect(() => {
        updateLoading(true);
        const controller = new AbortController();
        axios.get(currentPageUrl, {
            signal: controller.signal
        }).then((res : AxiosResponse) => {
                updateLoading(false);
                updatePokemon(res.data.results.map((p : any) => p));
            });
        return () => controller.abort();
    }, [currentPageUrl]);

    // if (loading) {
    //     return "Loading...";
    // }

    function getNewLink() {
        number += 20;
        console.log(number);
        updateCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`);
    }

    return (
       <>
          <header>
              <h1>Pokedex</h1>
          </header>
           <main>
            <PokemonList pokemons={pokemonData} />
            <GetMoreButton getNewLink={getNewLink}/>
           </main>
       </>
      );
}

export default App;
