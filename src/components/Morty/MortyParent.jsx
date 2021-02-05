import React, { useState, useEffect } from 'react';
import MortyChild from './MortyChild';
import {CardColumns} from 'reactstrap';

const MortyParent = () => {

    const [characters, setCharacters] = useState([])

    function fetchMorty(){
        const url = "https://rickandmortyapi.com/api/character"
        
        fetch(url)
        //method and headers not required since this doesn't need authorization tokens
        .then(response => response.json())
        .then((json) => {
            setCharacters(json.results)
            console.log(json.results)
        })
    }

    useEffect(() => {
        fetchMorty();
    }, [])

    function displayCards(){
        
        return characters.length > 0 ? characters.map(character => <MortyChild mortyCharacter = {character} />) : null;
    }

    return (
        <div>
            <button onClick={fetchMorty}>Fetch Morty</button>
            <CardColumns>
                {/* <MortyChild /> */}
                {displayCards ()}
            </CardColumns>
        </div>
    );
}

export default MortyParent;