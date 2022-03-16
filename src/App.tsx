import React, { useState, useEffect } from 'react';
import './App.css';
import axios, {AxiosError, AxiosResponse} from 'axios';
import PokemonList from "./components/PokemonList";
import GetMoreButton from "./components/GetMoreButton";
import LoadingDots from "./components/LoadingDots";
import UseDarkMode from "./styles/UseDarkMode";
import ThemeToggle from "./components/ThemeToggle";
import {GlobalStyles, lightTheme, darkTheme} from "./styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";


function App() {
    const [theme, toggleTheme] = UseDarkMode();
    const [pokemonData, updatePokemon] = useState<any[]>([]);
    const [currentPageUrl, updateCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    const [loading, updateLoading] = useState(true);
    const [number, updateNumber] = useState(40);
    const [error, updateError] = useState(false);
    const [isMore, updateIsMore] = useState(false)
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        updateLoading(true);
        updateError(false);
        const controller = new AbortController();
        axios.get(currentPageUrl, {
            signal: controller.signal
        }).then((res : AxiosResponse) => {
                updateLoading(false);
                updatePokemon(prev =>
                    [...prev, res.data.results.map((p : any) => p)]);
                updateIsMore(res.data.results.length > 0);
        }).catch((error : AxiosError) => {
            if (axios.isCancel(error)) {
                updateError(true);
            }
        });
        return () => controller.abort();
    }, [currentPageUrl]);

    function getNewLink(link: string) {
        updateNumber(number => number + 20);
        updateCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${number}`);
    }

    return (
       <>
           <ThemeProvider theme={themeMode}>
               <GlobalStyles />
          <header>
              <ThemeToggle  theme={theme} toggleTheme={toggleTheme}/>
              <h1 id={"title"}>Pokedex</h1>
          </header>
           <main>
            <PokemonList pokemons={pokemonData} />
              {loading && <LoadingDots />}
               <div>{error && 'Error...'}</div>
            <GetMoreButton getNewLink={getNewLink}/>
           </main>
           </ThemeProvider>
       </>
      );
}

export default App;
