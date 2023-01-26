import React from "react";
import "../index.css";

export default function Header(){
    return (
   
        <header className="page-header">
              
   
            <button value="characters">Characters</button>
            <button value="planets">Planets</button>
            <button>Movies</button>
            <button>Species</button>
            <button>Vehicles</button>
            <button>Starships</button>
        </header>
      
    )
}