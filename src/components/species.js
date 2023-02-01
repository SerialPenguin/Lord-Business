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
      {props.state === "species" && (
        <div>
          {species.length > 0 && (
            <div>
              <div className="info-btns">
                {species.map((specie) => (
                  <button
                    key={specie.url}
                    onClick={() => fetchSpecie(specie.url)}>
                    {specie.name}
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

      {props.state === "species" && selectedSpecies.name && (
        <div className="information">
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
        </div>
      )}
    </div>
  );
};

export default Species;
