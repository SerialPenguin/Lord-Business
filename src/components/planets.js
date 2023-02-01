import React, { useState, useEffect } from "react";

const Planets = (props) => {
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
    <div>
      {props.state === "planets" && (
        <div>
          {planets.length > 0 && (
            <div>
              <div>
                {planets.map((planet) => (
                  <button
                    key={planet.url}
                    onClick={() => fetchPlanet(planet.url)}>
                    {planet.name}
                  </button>
                ))}
              </div>
              <button onClick={handlePrev} disabled={currentPage === 1}>
                Prev
              </button>
              <button onClick={handleNext} disabled={currentPage === 6}>
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {props.state === "planets" && selectedPlanet.name && (
        <div>
          <h3>{selectedPlanet.name}</h3>
          <p>Rotation time: {selectedPlanet.rotation_period} days</p>
          <p>Orbital time: {selectedPlanet.orbital_period} days</p>
          <p>Diameter: {selectedPlanet.diameter} km</p>
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
