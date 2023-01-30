import React, { useState, useEffect } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPlanets = async (page) => {
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

  const fetchPlanet = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedPlanet(data);
  };

  useEffect(() => {
    const button = document.getElementById("planets");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="character-div">
      <div>
        {planets.length > 0 && (
          <div>
            <ul>
              {planets.map((planet) => (
                <li 
                  key={planet.url} 
                  onClick={() => fetchPlanet(planet.url)}>
                  {planet.name}
                </li>
              ))}
            </ul>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={handleNext} disabled={currentPage === 6}>
              Next
            </button>
          </div>
        )}
      </div>

      {selectedPlanet.name && (
        <div className="character-info">
          <h3>{selectedPlanet.name}</h3>
          <p>Rotation Time: {selectedPlanet.rotation_period}</p>
          <p>Orbital Time: {selectedPlanet.orbital_period}</p>
          <p>Diameter: {selectedPlanet.diameter}</p>
          <p>Climate: {selectedPlanet.climate}</p>
          <p>Gravity: {selectedPlanet.gravity}</p>
          <p>Terrain: {selectedPlanet.terrain}</p>
          <p>Population: {selectedPlanet.population}</p>
        </div>
      )}
    </div>
  );
};

export default Planets;