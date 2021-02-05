// https://api.chucknorris.io/
// You will need to reach out to the chuck norris API to be able to get data back.
// Use the following documentation to view how to use the Chuck Norris API
// Choose the random joke generation.
// Test the url in postman to see what response you are getting back.
// Store joke in a useState
// Make the button call a function called handleFetch()
// inside the function handleFetch() is where you will be doing the fetch

// import React, { useState } from 'react';

// const ChuckJokes = () => {

//     const [joke, setJoke] = useState("");

//     function fetchJokes(){
//         const url = "https://api.chucknorris.io/jokes/random"

//         fetch (url)
//         .then(response => response.json())
//         .then((json) => setJoke(json.value));
//         }    

//     return (
//         <div>
//             Chuck Jokes here {joke}
//             <button onClick={fetchJokes}>Click for Jokes</button>
//         </div>
//     );
// }

// export default ChuckJokes;




import React, { useState } from 'react';
import ChuckChild from "./ChuckChild";

const ChuckJoke = () => {

    const [jokes, setJokes] = useState("")

    function fetchJoke(){
        const url = "https://api.chucknorris.io/jokes/random"
    
        fetch (url)
        .then(response => response.json())
        .then((json) => {
            setJokes(json.value)
            console.log(json.value)
        })
    }

    return (
        <div>          
            <button onClick={fetchJoke}>Fetch Joke</button>
            <ChuckChild /> {jokes}
        </div>
    );
}

export default ChuckJoke;