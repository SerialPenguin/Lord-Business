import React, { useState, useEffect } from "react";

const Starships = (props) => {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/?search=${inputValue}`);
      const data = await response.json();
      if(data.results.length > 0){
      setSearchedItem(data.results)}
      else{setSearchedItem(null); setNoFound(true)}
    };

    if (inputValue !== '') {
      // props.setState('search')
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
      {props.state === "starships" && (
        <div>
          <div className="input-search">
            <input className="input-search-field" placeholder="Search For Starships..." type="text" onKeyDown={handleKeyDown} />
          </div>
          {props.state === "starships" && selectedStarship.name && (
        <div className="information">
            <div>
                       <h3>{selectedStarship.name}</h3>
            <p>Model: {selectedStarship.model}</p>
            <p>Manufacturer: {selectedStarship.manufacturer}</p>
            <p>Cost: {selectedStarship.cost_in_credits} credits</p>
            <p>Length: {selectedStarship.length} m</p>
            <p>
              Max athmospehere speed: {selectedStarship.max_atmosphering_speed}{" "}
              km/h
            </p>
            <p>Crew: {selectedStarship.crew}</p>
            <p>Passengers: {selectedStarship.passengers}</p>
            </div>
        </div>
      )}
          {props.state === 'starships' && searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].name)}</h3> 
          <p>Model: {searchedItem[0].model}</p>
          <p>Manufacturer: {searchedItem[0].manufacturer}</p>
          <p>Cost in credits: {searchedItem[0].cost_in_credits}</p>
          <p>Length: {searchedItem[0].length} m</p>
          <p>Max atmosphering speed: {searchedItem[0].max_atmosphering_speed} km/h</p>
          <p>Crew: {searchedItem[0].crew}</p>
          <p>Passangers: {searchedItem[0].passengers}</p></div></div> : null} 
          {noFound && <p>nothing found</p>}
          {starships.length > 0 && (
            
            <div>
              <div className="info-btns">
                {starships.map((starship) => (
                  <button
                    className="character-btn"
                    key={starship.url}
                    onClick={() => fetchStarship(starship.url)}>
                    {starship.name}
                  </button>
                ))}
              </div>
              <div className="next-btn">
                <button onClick={handlePrev} disabled={currentPage === 1}>
                  Prev
                </button>
                <button onClick={handleNext} disabled={currentPage === 9}>
                Next
              </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Starships;
