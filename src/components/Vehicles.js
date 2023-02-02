//import react, and useState and useEffect
import React, { useState, useEffect } from "react";

const Vehicles = (props) => {
  //setting the states
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);
  const [noFound,setNoFound] = useState(false)

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://swapi.dev/api/vehicles/?search=${inputValue}`);
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



  //a function to fetch and store data in state from API with different page numbers
  const fetchVehicles = async (page) => {
    const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
    const data = await res.json();
    setVehicles(data.results);
  };
//to render the first 10 names and then be able to render the next 10 names or bo back to prev names
  const handleClick = () => {
    fetchVehicles(currentPage);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    fetchVehicles(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchVehicles(currentPage + 1);
  };

  const fetchVehicle = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelectedVehicle(data);
  };
  //saves information with in the button click
  useEffect(() => {
    const button = document.getElementById("vehicles");
    button.addEventListener("click", handleClick);
    //so you can not click the same button twice
    return () => {
      button.removeEventListener("click", handleClick);
    };
  });
  //on click return information about vehicles and then when click on rendered
  //vehicle get information about that vehicle.
  //props.state tests if vechiles is true then render this information

  return (
    <div>
      {props.state === "vehicles" && (
        <div>
            <input placeholder="Search For Vehicles..." type="text" onKeyDown={handleKeyDown} />
            {props.state === 'search' && searchedItem !== null ?  <div className="information"> <div><h3>Found: {JSON.stringify(searchedItem[0].name)}</h3> 
            <p>Model: {searchedItem[0].model}</p>
            <p>Manufacturer: {searchedItem[0].manufacturer}</p>
            <p>Cost: {searchedItem[0].cost_in_credits} credits</p>
            <p>Length: {searchedItem[0].length} m</p>
            <p>Crew: {searchedItem[0].crew}</p>
            <p>Passengers: {searchedItem[0].passengers}</p>
            <p>Cargo capacity: {searchedItem[0].cargo_capacity} ton</p></div></div> : null} 
          {noFound && <p>nothing found</p>}
          {vehicles.length > 0 && (
            <div>
              <div className="info-btns">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle.url}
                    onClick={() => fetchVehicle(vehicle.url)}>
                    {vehicle.name}
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

      {props.state === "vehicles" && selectedVehicle.name && (
        <div className="information">
          <div>
            <h3>{selectedVehicle.name}</h3>
            <p>Model: {selectedVehicle.model}</p>
            <p>Manufacturer: {selectedVehicle.manufacturer}</p>
            <p>Cost: {selectedVehicle.cost_in_credits} credits</p>
            <p>Length: {selectedVehicle.length} m</p>
            <p>Crew: {selectedVehicle.crew}</p>
            <p>Passengers: {selectedVehicle.passengers}</p>
            <p>Cargo capacity: {selectedVehicle.cargo_capacity} ton</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
