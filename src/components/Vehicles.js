import React, { useState, useEffect } from 'react';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchVehicles = async (page) => {
    const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
    const data = await res.json();
    setVehicles(data.results);
  };

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

  useEffect(() => {
    const button = document.getElementById("vehicles");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className='character-div'>
      <div>
        {vehicles.length > 0 && (
          <div>
            <ul>
              {vehicles.map((vehicle) => (
                <li
                  key={vehicle.url}
                  onClick={() => fetchVehicle(vehicle.url)}>
                  {vehicle.name}
                </li>
              ))}
            </ul>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              Prev
            </button>
            <button onClick={handleNext} disabled={currentPage === 4}>
              Next
            </button>
          </div>
        )}
      </div>

      {selectedVehicle.name && (
        <div className='character-info'>
          <h3>{selectedVehicle.name}</h3>
          <p>Model: {selectedVehicle.model}</p>
          <p>Manufacturer: {selectedVehicle.manufacturer}</p>
          <p>Cost: {selectedVehicle.cost_in_credits}</p>
          <p>Length: {selectedVehicle.length}</p>
          <p>Crew: {selectedVehicle.crew}</p>
          <p>Passengers: {selectedVehicle.passengers}</p>
          <p>Cargo capacity: {selectedVehicle.cargo_capacity}</p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
