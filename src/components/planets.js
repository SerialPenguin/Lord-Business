// import React, { useState, useEffect } from 'react';

// function Planets() {
//   const [names, setNames] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchNames = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://swapi.dev/api/planets/');
//       const data = await response.json();
//       setNames(data.results.map(result => result.name));
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const button = document.getElementById('planets');
//     button.addEventListener('click', fetchNames);

//     return () => {
//       button.removeEventListener('click', fetchNames);
//     };
//   }, []);

//   return (
//     <div>
//       {loading ? <p>Loading...</p> : null}
//       {names.length > 0 ? (
//         <ul>
//           {names.map((name, index) => (
//             <li key={index}>{name}</li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// }

// export default Planets;

import React, { useState, useEffect } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPlanets = async page => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const data = await res.json();
    setPlanets(data.results);
  };

  const handleClick = () => {
    fetchPlanets(currentPage);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    fetchPlanets(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchPlanets(currentPage + 1);
  };

  useEffect(() => {
    const button = document.getElementById('planets');
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      {planets.length > 0 && (
        <div>
          <ul>
            {planets.map(planet => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ul>
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Planets;



