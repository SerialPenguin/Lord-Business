// Test 1

import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (page) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await res.json();
    setCharacters(data.results);
  };

  const handleClick = () => {
    fetchCharacters(currentPage);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    fetchCharacters(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchCharacters(currentPage + 1);
  };

  const fetchCharacter = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedCharacter(data);
  };

  useEffect(() => {
    const button = document.getElementById("characters");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });

  return (
    <div>
      <div>
        {characters.length > 0 && (
          <div>
            <ul>
              {characters.map((character) => (
                <li
                  key={character.url}
                  onClick={() => fetchCharacter(character.url)}>
                  {character.name}
                </li>
              ))}
            </ul>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={handleNext} disabled={currentPage === 9}>
              Next
            </button>
          </div>
        )}
      </div>

      {selectedCharacter.name && (
        <div>
          <h3>{selectedCharacter.name}</h3>
          <p>Height: {selectedCharacter.height} cm</p>
          <p>Weight: {selectedCharacter.mass} kg</p>
          <p>Hair Color: {selectedCharacter.hair_color}</p>
          <p>Skin Color: {selectedCharacter.skin_color}</p>
          <p>Eye Color: {selectedCharacter.eye_color}</p>
          <p>Birth Year: {selectedCharacter.birth_year}</p>
          <p>Gender: {selectedCharacter.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Characters;