import axios from 'axios'
import { useState, useEffect } from 'react';

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let newPokemons = [];
        let pageItemsNumber = 12;
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pageItemsNumber}&offset=${page * pageItemsNumber - pageItemsNumber}`)
            .then(async response => {
                let promises = [];
                for (let pokemon of response.data.results) {
                    promises.push(axios.get(pokemon.url).then(response => {
                        newPokemons.push(response.data)
                    }))
                };
                await Promise.all(promises);
                setPokemons(newPokemons);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [page])

    const addToFavoris = (pokemon) => {
        const Favoris = JSON.parse(localStorage.getItem('Favoris')) || [];
        Favoris.push(pokemon);
        localStorage.setItem('Favoris', JSON.stringify(Favoris));
        console.log(localStorage); // affiche le contenu du localStorage dans la console
    };

    return (
        <div className="poke">
            <div className='pokemons'>
                {pokemons.map((pokemon, index) => {
                    return (
                        <div className="cards" key={index}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                            <button onClick={() => addToFavoris(pokemon)}>Add to Favoris</button>
                        </div>
                    )
                })}
            </div>
            <div className='pages'>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Page précédente</button>
                <p>{page}</p>
                <button onClick={() => setPage(page + 1)}>Page suivante</button>
                {loading && <p>Loading...</p>}
            </div>
        </div>
    )
};

export default Home;