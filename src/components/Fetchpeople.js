// import { useEffect, useState } from "react";

// function LoadCharacters() {
//     function loadPeople() {
//         fetch('https://swapi.dev/api/people/')
//         .then((res) => res.json())
//         .then((data) => {
//             setIsLoading(false)             
//             for(let i = 0; i < data.results.length; i ++)
//             console.log('Name: ' + data.results[i].name)
//             setPeople(data.people)
//         }
        
//     )}

//     const [people, setPeople] = useState();
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => {
//         loadPeople();
//     }, []);

//     if(isLoading){
//         return <p>Loading...</p>
//     }

//     return (
//         <div>
//             <h1>Name: {people}</h1>
//             <button onClick={loadPeople}>Load Names</button>
//         </div>
//     )
// }

// export default LoadCharacters;