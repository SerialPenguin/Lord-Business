import React, { useState, useEffect } from 'react';

function Species() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNames = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/species/');
      const data = await response.json();
      setNames(data.results.map(result => result.name));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const button = document.getElementById('species');
    button.addEventListener('click', fetchNames);

    return () => {
      button.removeEventListener('click', fetchNames);
    };
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {names.length > 0 ? (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Species;

// import React, { useState, useEffect } from "react";

// function Species() {
//   const [apiData, setApiData] = useState({});
//   const [selectedButton, setSelectedButton] = useState("planets");

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/${selectedButton}`)
//       .then(res => res.json())
//       .then(data => {
//         setApiData(data);
//       });
//   }, [selectedButton]);

//   return (
//     <div>
//       <button onClick={() => setSelectedButton("planets")}>Planets</button>
//       <button onClick={() => setSelectedButton("starships")}>Starships</button>
//       <div id="api-data">
//         {apiData.results ? (
//           apiData.results.map((item, index) => (
//             <div key={index}>
//               <p>{item.name}</p>
//               <p>{item.model}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Species;
