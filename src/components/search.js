import React from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);

  
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`https://swapi.dev/api/vehicles/?q=${searchTerm}`);
    const data = await response.json();
    setResults(data.results);
  };

  
  return (
    <div>
      { props.state === 'search' && <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button> 
      </form> }
      { props.state === 'search' && <div> 
        {results.map(result => (
          <button key={result.id}>{result.name}</button> 
        ))}
      </div> }
    </div>)

} 

export default Search;