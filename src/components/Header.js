import React from "react";
import "../index.css";
//to help us navigate in api using consol.log and also render buttons
export default function Header(props) {
  return (
    <header className="page-header">
      <button
        id="characters"
        className="characterss-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/people/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("characters");
        }}></button>

      <button
        id="planets"
        className="planetss-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/planets/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("planets");
        }}></button>

      <button
        id="films"
        className="moviess-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/films/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("films");
        }}></button>

      <button
        id="species"
        className="speciess-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/species/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("species");
        }}></button>

      <button
        id="vehicles"
        className="vehicless-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/vehicles/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("vehicles");
        }}></button>

      <button
        id="starships"
        className="starshipss-btn"
        onClick={() => {
          fetch("https://swapi.dev/api/starships/")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
            });
          props.setState("starships");
        }}></button>
    </header>
  );
}
