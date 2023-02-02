import React, { useState, useEffect } from "react";

function Films(props) {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [currentPage] = useState();
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)


  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/films/?search=${inputValue}`);
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

  const fetchFilms = async () => {
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    setFilms(data.results);
  };

  const handleClick = () => {
    fetchFilms(currentPage);
  };

  const fetchFilm = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedFilm(data);
  };

  useEffect(() => {
    const button = document.getElementById("films");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });

  return (
    <div>
      {props.state === "films" && (
        <div>
          <input placeholder="Search For Film..." type="text" onKeyDown={handleKeyDown} />
          {props.state === 'search' && searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].title)}</h3> 
          <p>Episode nr: {searchedItem[0].episode_id}</p>
          <p>Director: {searchedItem[0].director}</p>
          <p>Producer: {searchedItem[0].producer}</p>
          <p>Release date: {searchedItem[0].release_date}</p>
         </div></div> : null} 
          {noFound && <p>nothing found</p>}
          {films.length > 0 && (
            <div>
              <div className="info-btns">
                {films.map((film) => (
                  <button key={film.url} onClick={() => fetchFilm(film.url)}>
                    {film.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {props.state === "films" && selectedFilm.title && (
        <div className="information">
        <div>
          <h3>{selectedFilm.title}</h3>
          <p>Episode nr: {selectedFilm.episode_id}</p>
          <p>Director: {selectedFilm.director}</p>
          <p>Producer: {selectedFilm.producer}</p>
          <p>Release date: {selectedFilm.release_date}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Films;
