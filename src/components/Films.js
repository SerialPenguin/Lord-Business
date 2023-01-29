import React, { useState, useEffect } from 'react';

function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      setFilms(data.results.map(result => result.title));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const button = document.getElementById('films');
    button.addEventListener('click', fetchFilms);

    return () => {
      button.removeEventListener('click', fetchFilms);
    };
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {films.length > 0 ? (
        <ul>
          {films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Films;