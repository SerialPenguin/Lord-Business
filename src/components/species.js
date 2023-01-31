import React, { useState, useEffect } from "react";

const Species = (props) => {
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
    <div>
      { props.state === 'species' && <div>
        {species.length > 0 && (
          <div>
            <div>
              {species.map((specie) => (
                <button 
                  key={specie.url} 
                  onClick={() => fetchSpecie(specie.url)}>
                  {specie.name}
                </button>
              ))}
            </div>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={handleNext} disabled={currentPage === 4}>
              Next
            </button>
          </div>
        )}
      </div> }

      {props.state === 'species' && selectedSpecies.name && (
        <div>
          <h3>{selectedSpecies.name}</h3>
          <p>Type: {selectedSpecies.classification}</p>
          <p>Designation: {selectedSpecies.designation}</p>
          <p>Aberage height: {selectedSpecies.average_height} cm</p>
          <p>Skin color(s): {selectedSpecies.skin_colors}</p>
          <p>Hair color(s): {selectedSpecies.hair_colors}</p>
          <p>Eye color(s): {selectedSpecies.eye_colors}</p>
          <p>Average lifespan: {selectedSpecies.average_lifespan}</p>
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
