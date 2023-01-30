// Test 1


import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const fetchCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    setCharacters(data.results);
  };

  const fetchCharacter = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedCharacter(data);
  };

  useEffect(() => {
    const button = document.getElementById('characters');
    button.addEventListener('click', fetchCharacters);

    return () => {
      button.removeEventListener('click', fetchCharacters);
    };
  }, []);

  return (
    <div>
      
      <ul>
        {characters.map((character) => (
          <li key={character.url} onClick={() => fetchCharacter(character.url)}>
            {character.name}
          </li>
          
        ))}
      </ul>
      {selectedCharacter.name && (
        <div>
          <h3>{selectedCharacter.name}</h3>
          <p>Height: {selectedCharacter.height}</p>
          <p>Mass: {selectedCharacter.mass}</p>
          <p>Hair Color: {selectedCharacter.hair_color}</p>
          <p>Skin Color: {selectedCharacter.skin_color}</p>
          <p>Eye Color: {selectedCharacter.eye_color}</p>
          <p>Birth Year: {selectedCharacter.birth_year}</p>
          <p>Gender: {selectedCharacter.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Characters;



// Test 2


// import React, { useState, useEffect } from 'react';

// function Characters() {
//   const [people, setPeople] = useState([]);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchPeople = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://swapi.dev/api/people/');
//       const data = await response.json();
//       setPeople(data.results);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPeople();
//   }, []);

//   return (
//     <div>
//       {loading ? <p>Loading...</p> : null}
//       <ul>
//         {people.map((person, index) => (
//           <li key={index} onClick={() => setSelectedPerson(person)}>
//             {person.name}
//           </li>
//         ))}
//       </ul>
//       {selectedPerson ? (
//         <div>
//           <h2>{selectedPerson.name}</h2>
//           <p>Height: {selectedPerson.height}</p>
//           <p>Mass: {selectedPerson.mass}</p>
//           <p>Hair Color: {selectedPerson.hair_color}</p>
//           <p>Skin Color: {selectedPerson.skin_color}</p>
//           <p>Eye Color: {selectedPerson.eye_color}</p>
//           <p>Birth Year: {selectedPerson.birth_year}</p>
//           <p>Gender: {selectedPerson.gender}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default Characters;


// Test 3



// import { useState } from 'react';

// const Characters = () => {
//   const [data, setData] = useState({ results: [] });
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {
//     setIsLoading(true);

//     // https://swapi.dev/api/people/

//     try {
//       const response = await fetch('https://swapi.dev/api/people/', {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       console.log('result is: ', JSON.stringify(result, null, 4));

//       setData(result);
//     } catch (err) {
//       setErr(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log(data);

//   return (
//     <div>
//       {err && <h2>{err}</h2>}

//       <button onClick={handleClick}>Fetch data</button>

//       {isLoading && <h2>Loading...</h2>}

//       {data.data && data.data.map(person => {
//         return (
//           <div key={person.id}>
//             <h2>{person.name}</h2>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Characters;