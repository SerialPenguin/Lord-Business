import React, { useState, useEffect } from "react";

const Starships = (props) => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchStarships = async (page) => {
    const res = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    const data = await res.json();
    setStarships(data.results);
  };

  const handleClick = () => {
    fetchStarships(currentPage);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    fetchStarships(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchStarships(currentPage + 1);
  };

  const fetchStarship = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedStarship(data);
  };

  useEffect(() => {
    const button = document.getElementById("starships");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });
  return (
    <div>
      { props.state === 'starships' && <div>
        {starships.length > 0 && (
          <div>
            <div>
              {starships.map((starship) => (
                <button 
                  key={starship.url} 
                  onClick={() => fetchStarship(starship.url)}>
                  {starship.name}
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

      {props.state === 'starships' && selectedStarship.name && (
        <div>
          <h3>{selectedStarship.name}</h3>
          <p>Model: {selectedStarship.model}</p>
          <p>Manufacturer: {selectedStarship.manufacturer}</p>
          <p>Cost: {selectedStarship.cost_in_credits} credits</p>
          <p>Length: {selectedStarship.length} m</p>
          <p>Max athmospehere speed: {selectedStarship.max_atmosphering_speed} km/h</p>
          <p>Crew: {selectedStarship.crew}</p>
          <p>Passengers: {selectedStarship.passengers}</p>
        </div>
      )}
    </div>
  );
};

export default Starships;

/*
import React, { useState, useEffect } from 'react';

function Starships() {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNames = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
      const data = await response.json();
      setNames(data.results.map(result => result.name));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const button = document.getElementById('starships');
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

export default Starships;
*/