import React from 'react';

export default function PokemonModal({ pokemonDetails, toggleModal } : { pokemonDetails: any, toggleModal: any }) {
    return (
        <div className={"modal-background"}>
            <div className={"modal-content"}>
                <div className={"modal-header"}>
                    {pokemonDetails.name}
                    <span onClick={() => toggleModal(false)} className={"close-btn-modal"}>X</span>
                </div>
                <article className={"modal-body"}>
                    <div className={"more-info"}>
                        <span className="material-icons-outlined">scale</span>
                        Weight: {pokemonDetails.weight} <br/>
                    </div>
                    <div className={"more-info"}>
                        <span className="material-icons-outlined">
                        height
                        </span>
                        Height: {pokemonDetails.height}
                    </div>
                </article>
            </div>
        </div>
    );
}