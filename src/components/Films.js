import React, { useState, useEffect } from "react";

function Films(props) {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [currentPage] = useState();

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
