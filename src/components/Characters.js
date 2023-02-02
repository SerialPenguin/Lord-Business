import React, { useState, useEffect } from "react";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)

/*  const fetchSearch = async (query) => {
    const res = await fetch (` https://swapi.dev/api/people/?search=${query}`);
    const data = await res.json();
    setSearchedItem(data.resluts.name)
   

  }*/


  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/people/?search=${inputValue}`);
      const data = await response.json();
      if(data.results.length > 0){
      setSearchedItem(data.results)}
      else{setSearchedItem(null); setNoFound(true)}
    };

    if (inputValue !== '') {
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
      {props.state === "characters" && (
        <div>
          <input className="input-search" placeholder="Search For Character" type="text" onKeyDown={handleKeyDown} />
          {searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].name)}</h3> 
          <p>Height: {searchedItem[0].height} cm</p>
          <p>Weight: {searchedItem[0].mass} kg</p>
          <p>Hair color: {searchedItem[0].hair_color}</p>
          <p>Skin color: {searchedItem[0].skin_color}</p>
          <p>Eye color: {searchedItem[0].eye_color}</p>
          <p>Birth year: {searchedItem[0].birth_year}</p>
          <p>Gender: {searchedItem[0].gender}</p></div></div> : null} 
          {noFound && <p>nothing found</p>}
          {characters.length > 0 && (
            <div>
              <div className="info-btns">
                {characters.map((character) => (
                  <button
                    className="character-btn"
                    key={character.url}
                    onClick={() => fetchCharacter(character.url)}>
                    {character.name}
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

      {props.state === "characters" && selectedCharacter.name && (
        <div className="information">
        <div>
          <h3>{selectedCharacter.name}</h3>
          <p>Height: {selectedCharacter.height} cm</p>
          <p>Weight: {selectedCharacter.mass} kg</p>
          <p>Hair color: {selectedCharacter.hair_color}</p>
          <p>Skin color: {selectedCharacter.skin_color}</p>
          <p>Eye color: {selectedCharacter.eye_color}</p>
          <p>Birth year: {selectedCharacter.birth_year}</p>
          <p>Gender: {selectedCharacter.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
