import React, { useState, useEffect } from "react";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchSpecies = async (page) => {
    const res = await fetch(`https://swapi.dev/api/species/?page=${page}`);
    const data = await res.json();
    setSpecies(data.results);
  };

  const handleClick = () => {
    fetchSpecies(currentPage);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    fetchSpecies(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchSpecies(currentPage + 1);
  };

  const fetchSpecie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedSpecies(data);
  };

  useEffect(() => {
    const button = document.getElementById("species");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className="character-div">
      <div>
        {species.length > 0 && (
          <div>
            <ul>
              {species.map((specie) => (
                <li 
                  key={specie.url} 
                  onClick={() => fetchSpecie(specie.url)}>
                  {specie.name}
                </li>
              ))}
            </ul>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={handleNext} disabled={currentPage === 4}>
              Next
            </button>
          </div>
        )}
      </div>

      {selectedSpecies.name && (
        <div className="character-info">
          <h3>{selectedSpecies.name}</h3>
          <p>Rotation Time: {selectedSpecies.classification}</p>
          <p>Orbital Time: {selectedSpecies.designation}</p>
          <p>Diameter: {selectedSpecies.average_height}</p>
          <p>Climate: {selectedSpecies.skin_colors}</p>
          <p>Gravity: {selectedSpecies.hair_colors}</p>
          <p>Terrain: {selectedSpecies.eye_colors}</p>
          <p>Population: {selectedSpecies.average_lifespan}</p>
        </div>
      )}
    </div>
  );
};

export default Species;



/*
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
*/
