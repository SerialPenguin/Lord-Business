import React, { useState, useEffect } from "react";

function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [currentPage] = useState();

  const fetchFilms = async () => {
    const res = await fetch('https://swapi.dev/api/films/');
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
  }, []);

  return (
    <div className="character-div" >
      <div>
        {films.length > 0 && (
          <div>
            <ul>
              {films.map((film) => (
                <li
                  key={film.url}
                  onClick={() => fetchFilm(film.url)}>
                  {film.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedFilm.title && (
        <div className="character-info">
          <h3>{selectedFilm.title}</h3>
          <p>Episode nr: {selectedFilm.episode_id}</p>
          <p>Director: {selectedFilm.director}</p>
          <p>Producer: {selectedFilm.producer}</p>
          <p>Release date: {selectedFilm.release_date}</p>
        </div>
      )}
    </div>
  );
}

export default Films;
