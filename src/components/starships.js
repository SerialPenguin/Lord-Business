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
      {props.state === "starships" && (
        <div>
          {starships.length > 0 && (
            <div>
              <div className="info-btns">
                {starships.map((starship) => (
                  <button
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
              <button onClick={handleNext} disabled={currentPage === 4}>
                Next
              </button>
              </div>
            </div>
          )}
        </div>
      )}

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
    </div>
  );
};
export default Starships;
