import React, { useState, useEffect } from "react";

const Species = (props) => {
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/species/?search=${inputValue}`);
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
          <input placeholder="Search For Species..." type="text" onKeyDown={handleKeyDown} />
          {props.state === 'search' && searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].name)}</h3> 
          <p>Classification: {searchedItem[0].classification}</p>
          <p>Designation: {searchedItem[0].designation}</p>
          <p>Average height: {searchedItem[0].average_height} cm</p>
          <p>Skin colors: {searchedItem[0].skin_colors}</p>
          <p>Hair colors: {searchedItem[0].hair_colors}</p>
          <p>Eye colors: {searchedItem[0].eye_colors}</p>
          <p>Average lifespan: {searchedItem[0].average_lifespan} years</p></div></div> : null} 
          {noFound && <p>nothing found</p>}
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
          <p>Average height: {selectedSpecies.average_height} cm</p>
          <p>Skin color(s): {selectedSpecies.skin_colors}</p>
          <p>Hair color(s): {selectedSpecies.hair_colors}</p>
          <p>Eye color(s): {selectedSpecies.eye_colors}</p>
          <p>Average lifespan: {selectedSpecies.average_lifespan} years</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Species;
