import React, {useState} from 'react';

export default function GetMoreButton({ getNewLink } : { getNewLink: any }) {
    const [number, updateNumber] = useState(40);
    return (
        <div>
            <button className={"more-button"} onClick={() => getNewLink(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${number}`)}>Show me more!</button>
        </div>
    );
}