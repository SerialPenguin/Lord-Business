import React, { useState, useEffect } from "react";

const Planets = (props) => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)




  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/planets/?search=${inputValue}`);
      const data = await response.json();
      if(data.results.length > 0){
      setSearchedItem(data.results)}
      else{setSearchedItem(null); setNoFound(true)}
    };

    if (inputValue !== '') {
      props.setState('search')
      setNoFound(false)
      fetchSearch();
    }
  }, [inputValue]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setInputValue(event.target.value);
      
    }
  };
//
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
          <input placeholder="Search For Planet..." type="text" onKeyDown={handleKeyDown} />
          {props.state === 'search' && searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].name)}</h3> 
          <p>Rotation time: {searchedItem[0].rotation_period} days</p>
          <p>Orbital time: {searchedItem[0].orbital_period} days</p>
          <p>Diameter: {searchedItem[0].diameter} km</p>
          <p>Climate: {searchedItem[0].climate}</p>
          <p>Gravity: {searchedItem[0].gravity}</p>
          <p>Terrain: {searchedItem[0].terrain}</p>
          <p>Population: {searchedItem[0].population}</p>
          </div></div> : null} 
          {noFound && <p>nothing found</p>}
          {planets.length > 0 && (
            <div>
              <div className="info-btns">
                {planets.map((planet) => (
                  <button
                    key={planet.url}
                    onClick={() => fetchPlanet(planet.url)}>
                    {planet.name}
                  </button>
                ))}
              </div>
              <div className="next-btn">
              <button onClick={handlePrev} disabled={currentPage === 1}>
                Prev
              </button>
              <button onClick={handleNext} disabled={currentPage === 6}>
                Next
              </button>
              </div>
            </div>
          )}
        </div>
      )}

      {props.state === "planets" && selectedPlanet.name && (
        <div className="information">
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
        </div>
      )}
    </div>
  );
};

export default Planets;
