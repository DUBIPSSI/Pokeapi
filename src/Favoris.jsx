import React, { useState, useEffect } from 'react';

function Favoris() {
    const [Favoris, setFavoris] = useState([]);

    useEffect(() => {
        const storedFavoris = JSON.parse(localStorage.getItem('Favoris'));
        if (storedFavoris) {
            setFavoris(storedFavoris);
        }
    }, []);

    const removeFromFavoris = (pokemon) => {
        const updatedFavoris = Favoris.filter(fav => fav.name !== pokemon.name);
        localStorage.setItem('Favoris', JSON.stringify(updatedFavoris));
        setFavoris(updatedFavoris);
    };

    return (
        <div className='poke'>
            <div className='pokemons'>
                {Favoris.map((pokemon, index) => {
                    return (
                        <div className="cards" key={index}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                            <button onClick={() => removeFromFavoris(pokemon)}>remove from favorites</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Favoris;