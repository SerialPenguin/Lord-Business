import React from "react";
import "../index.css";
// import List from './components/list';


export default function Header(props){
    return (
   
        <header className="page-header">
              
   
<button id="characters" onClick={() => {
            fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
            console.log('hejhej');
             props.setState('characters') }
            }>Characters</button>

<button id="planets" onClick={() => {
            fetch('https://swapi.dev/api/planets/')
            .then(res => res.json())
            .then(json => {
                 console.log(json)
                 
            })
            props.setState('planets') }}
            >Planets</button>

<button id="films" onClick={() => {
            fetch('https://swapi.dev/api/films/')
            .then(res => res.json())
            .then(json => {
                 console.log(json)
            })
            props.setState('films') }
          }>Films</button>

<button id="species" onClick={() => {
            fetch('https://swapi.dev/api/species/')
            .then(res => res.json())
            .then(json => {
                 console.log(json)
            })
            props.setState('species') }
          }>Species</button>

<button id="vehicles" onClick={() => {
            fetch('https://swapi.dev/api/vehicles/')
            .then(res => res.json())
            .then(json => {
                 console.log(json)
            })
            props.setState('vehicles') }
          }>Vehicles</button>

<button id="starships" onClick={() => {
            fetch('https://swapi.dev/api/starships/')
            .then(res => res.json())
            .then(json => {
                 console.log(json)
            })
            props.setState('starships') }
          }>Starships</button>
            
       
        </header>
        
       
    )
} 




